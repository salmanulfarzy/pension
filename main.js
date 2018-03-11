function calculate() {
	const date_of_joining = document.getElementById('doj').valueAsDate;
	const date_of_retirement = document.getElementById('dor').valueAsDate;
	const avg = document.getElementById('avg_emol').value;

	years = Math.abs(date_of_retirement.getFullYear() - date_of_joining.getFullYear());
	months = Math.abs(date_of_retirement.getMonth() - date_of_joining.getMonth());
	days = Math.abs(date_of_retirement.getDate() - date_of_joining.getDate());

	total_service_text = document.createTextNode(`${years} Years ${months} Months and ${days} Days`);

	// months are zero indexed
	qualifying_service = months > 5 ? years+1 : years;
	qualifying_service_text = document.createTextNode(`${qualifying_service} Years`);

	var factor = qualifying_service >= 30 ? 1 : qualifying_service/30;
	monthly_pension = document.createTextNode(`Rs. ${(avg/2)*factor}`);

	document.getElementById('ts').appendChild(total_service_text);
	document.getElementById('qs').appendChild(qualifying_service_text);
	document.getElementById('pension').appendChild(monthly_pension);
}
