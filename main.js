function calculate() {
	const date_of_joining = document.getElementById('doj').valueAsDate;
	const date_of_retirement = document.getElementById('dor').valueAsDate;
	years = Math.abs(date_of_retirement.getFullYear() - date_of_joining.getFullYear());
	months = Math.abs(date_of_retirement.getMonth() - date_of_joining.getMonth());
	days = Math.abs(date_of_retirement.getDate() - date_of_joining.getDate());

	total_service_text = document.createTextNode(`${years} Years ${months} Months and ${days} Days`);

	// months are zero indexed
	qualifying_service = months > 5 ? years+1 : years;
	qualifying_service_text = document.createTextNode(`${qualifying_service} Years`);

	document.getElementById('ts').appendChild(total_service_text);
	document.getElementById('qs').appendChild(qualifying_service_text);
}
