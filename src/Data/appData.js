const VC_API_KEY = "RS23BC5Z2GM2T9WMGLJ53AVHA";


export async function fetchData(location) {
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?key=${VC_API_KEY}&unitGroup=metric&include=days,current&contentType=json`
	try {
	const response = await fetch(url);
	const data = await response.json();
	localStorage.setItem("lagos-data", JSON.stringify(data));
	return data;
	} catch(error) {
		alert("Something went wrong");
		return "ERROR";
	} finally {
	};
};




/* FOR CACHE TESTING...
export async function fetchData(location) {
	const data = await JSON.parse(localStorage.getItem("lagos-data"));
	return undefined;
}
*/



