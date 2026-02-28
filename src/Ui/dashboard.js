const currentDiv = document.querySelector("#current-div");
const todayDiv = document.querySelector("#today-div");
const forecastDiv = document.querySelector("#forecast-div");

export default {
	renderCards(dataObj) {

		// Validate location... This is a play
		// project, that is why it is here. it is a Util
		if (!dataObj) {
			forecastDiv.innerHTML = "Location Data not found."
			return;
		};

		const current = dataObj.currentConditions;
		const today = dataObj.days[0]
		const days = dataObj.days
console.log(dataObj)

		this.renderCurrent(current, dataObj);
		this.renderToday(today);
		this.renderForecast(days);
	},

	renderCurrent(current, dataObj) {
		currentDiv.innerHTML = `
			<h3>Current Data (${dataObj.resolvedAddress})</h3>
			<div class="card" id="current-card">
				<div class="icon">
					<p>${current.icon}</p>
				</div>
				<div class="main-info">
					<p>Currently...</p>
					<p>Temp: ${current.feelslike}°C</p>
					<p>Conditions: ${current.conditions}<p>
					<p>NB: This is the current data</p>
				</div>
			</div>
		`
	},

	renderToday(today) {
		todayDiv.innerHTML = `
			<h3>Today's Forecast</h3>
			<div class="card" id="today-card">
				<div class="icon">
					<p>${today.icon}</p>
				</div>
				<div class="main-info">
					<p>${today.datetime}</p>
					<p>Temp: ${today.feelslike}°C</p>
					<p>Conditions: ${today.conditions}</p>
					<p>NB: ${today.description}</p>
				</div>
			</div>
		`
	},

	renderForecast(daysArr) {
		forecastDiv.innerHTML = `
			<h3>Next 7 Days</h3>
		`
		for(let i = 1; i < daysArr.length; i++) {
			const dayData = daysArr[i];
			forecastDiv.innerHTML += `
				<div class="card" class="forecast-card">
					<div class="icon">
						<p>${dayData.icon}</p>
					</div>
					<div class="forecast-info">
						<p>${dayData.datetime}</p>
						<p>Temp: ${dayData.feelslike}°C</p>
						<p>Conditions: ${dayData.conditions}</p>
						<p>NB: ${dayData.description}</p>
					</div>
				</div>
			`
		}
	}
}
