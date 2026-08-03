export async function fetchData(location) {
  const apiKey = process.env.VC_API_KEY;
  if (!apiKey) {
    console.error("VC_API_KEY not set in environment");
    return null;
  }

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?key=${apiKey}&unitGroup=metric&include=days,current&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    // Cache with location‑specific key
    localStorage.setItem(`weather-${location}`, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    return null;
  }
}
