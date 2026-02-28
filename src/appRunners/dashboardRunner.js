import Dashboard from "../Ui/dashboard.js"
import { fetchData } from "../Data/appData.js"

const searchForm = document.querySelector("#search-box");
const searchInput = document.querySelector("#city");

(async function () {
	let dataObj = await fetchData("Lagos");
	Dashboard.renderCards(dataObj);
	searchInput.placeholder = "Lagos";
})();


searchForm.addEventListener("submit", async (e) => {
	e.preventDefault()
	const location = searchInput.value;

	let dataObj = await fetchData(location);
	Dashboard.renderCards(dataObj);

	searchInput.value = "";
	searchInput.placeholder = location;
})
