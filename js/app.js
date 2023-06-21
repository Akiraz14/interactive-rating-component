var starRated = 0;

function rateService() {
	document.getElementById('result').innerHTML = starRated;
    document.getElementById("ratingCard").style.display = 'none';
    document.getElementById("submitCard").style.display = 'block';
}

function startRating(item) {
	let ratingNumbers = document.getElementsByName("rate-num");
	ratingNumbers.forEach((rates) => {
		rates.classList.remove("selected-Star");
	});
	starRated = item.textContent;
	item.classList.add("selected-Star");
}
