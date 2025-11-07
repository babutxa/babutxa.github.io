// Travel Time Utilities for Swiss Public Transport
// Handles postal code to coordinates conversion and travel time calculations

// Postal code coordinates cache (starts minimal, grows dynamically)
const postalCodeCoordinates = {
  // Pre-cache most common Zurich area postal codes for instant performance
  8001: [47.3769, 8.5417], // Zürich City Center
  8400: [47.5019, 8.7273], // Winterthur
  8800: [47.2943, 8.5635], // Thalwil (user's example)
  // Other postal codes will be fetched and cached automatically
};

// Cache for public transport travel times
const travelTimeCache = {};

// Get coordinates for a postal code
function getCoordinatesFromPostalCode(postalCode) {
  // First check our local cache
  if (postalCodeCoordinates[postalCode]) {
    return postalCodeCoordinates[postalCode];
  }
  return null;
}

// Async function to fetch coordinates from Nominatim API
async function fetchCoordinatesFromAPI(postalCode) {
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&country=Switzerland&postalcode=${postalCode}&limit=1`;
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      // Cache the result for future use
      postalCodeCoordinates[postalCode] = [lat, lon];

      return [lat, lon];
    }
    return null;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
}

// Enhanced function to fetch travel time using coordinates directly
async function fetchTravelTimeToCoordinates(fromPostalCode, toLat, toLon) {
  const cacheKey = `${fromPostalCode}-${toLat},${toLon}`;

  // Return cached result if available
  if (travelTimeCache[cacheKey]) {
    return travelTimeCache[cacheKey];
  }

  try {
    // Get coordinates for the starting postal code
    let fromCoords = getCoordinatesFromPostalCode(fromPostalCode);
    if (!fromCoords) {
      fromCoords = await fetchCoordinatesFromAPI(fromPostalCode);
    }

    if (!fromCoords) {
      console.log(
        `Could not get coordinates for postal code ${fromPostalCode}`
      );
      return null;
    }

    // Use Swiss public transport API with exact school coordinates
    const url = `https://transport.opendata.ch/v1/connections?from=${fromCoords[0]},${fromCoords[1]}&to=${toLat},${toLon}&limit=1`;
    console.log(`Fetching travel time to coordinates [${toLat},${toLon}]`);
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.connections && data.connections.length > 0) {
      const connection = data.connections[0];

      // Use the duration field directly, which is in format "00d00:42:00"
      if (connection.duration) {
        // Parse duration string like "00d00:42:00" to get minutes
        const durationStr = connection.duration;
        console.log(`Raw duration string: ${durationStr}`);

        // Handle format "00d00:42:00" where it's days:hours:minutes
        if (durationStr.includes("d")) {
          // Split by 'd' first to separate days from time
          const [daysPart, timePart] = durationStr.split("d");
          const days = parseInt(daysPart, 10) || 0;

          // Now split the time part by ':'
          const timeParts = timePart.split(":");
          if (timeParts.length >= 2) {
            const hours = parseInt(timeParts[0], 10) || 0;
            const minutes = parseInt(timeParts[1], 10) || 0;
            const totalMinutes = days * 24 * 60 + hours * 60 + minutes;

            console.log(
              `Parsed: ${days}d ${hours}h ${minutes}m = ${totalMinutes} minutes total`
            );

            // Cache the result
            travelTimeCache[cacheKey] = totalMinutes;
            console.log(
              `Travel time from ${fromPostalCode} to [${toLat},${toLon}]: ${totalMinutes} minutes`
            );

            return totalMinutes;
          }
        }
      }

      // Fallback: use timestamps if duration parsing fails
      if (
        connection.from &&
        connection.from.departure &&
        connection.to &&
        connection.to.arrival
      ) {
        const departureTime = new Date(connection.from.departure);
        const arrivalTime = new Date(connection.to.arrival);
        const travelTimeMinutes = Math.round(
          (arrivalTime - departureTime) / (1000 * 60)
        );

        // Cache the result
        travelTimeCache[cacheKey] = travelTimeMinutes;
        console.log(
          `Travel time from ${fromPostalCode} to [${toLat},${toLon}]: ${travelTimeMinutes} minutes (fallback)`
        );

        return travelTimeMinutes;
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching travel time to coordinates:", error);
    return null;
  }
}

// Sort schools by public transport travel time from given postal code (optimized)
async function sortSchoolsByTravelTime(schools, userPostalCode) {
  console.log(`Calculating travel times from postal code ${userPostalCode}...`);

  // Prepare all travel time requests in parallel using exact coordinates
  const travelTimePromises = schools.map(async (school) => {
    try {
      // Use exact school coordinates for more accurate routing
      const travelTime = await fetchTravelTimeToCoordinates(
        userPostalCode,
        school.position[0],
        school.position[1]
      );

      return {
        ...school,
        travelTime: travelTime || 999,
      };
    } catch (error) {
      console.error(
        `Error getting travel time for ${school.schoolName}:`,
        error
      );
      return {
        ...school,
        travelTime: 999,
      };
    }
  });

  // Execute all requests in parallel and wait for results
  const schoolsWithTravelTime = await Promise.all(travelTimePromises);

  // Debug: Log all travel times
  console.log("Travel times calculated:");
  schoolsWithTravelTime.forEach((school) => {
    console.log(`${school.schoolName}: ${school.travelTime} minutes`);
  });

  // Sort by travel time
  const sortedSchools = schoolsWithTravelTime.sort(
    (a, b) => a.travelTime - b.travelTime
  );

  console.log(
    `Travel time calculation complete. Schools sorted by travel time.`
  );
  return sortedSchools;
}
