function calculate() {
	const date_of_joining = document.getElementById('doj').valueAsDate;
	const date_of_retirement = document.getElementById('dor').valueAsDate;
	const avg = document.getElementById('avg_emol').value;
	const last_pay = document.getElementById('last_pay').value;

	years = Math.abs(date_of_retirement.getFullYear() - date_of_joining.getFullYear());
	months = Math.abs(date_of_retirement.getMonth() - date_of_joining.getMonth());
	days = Math.abs(date_of_retirement.getDate() - date_of_joining.getDate());

	total_service_text = document.createTextNode(`${years} Years ${months} Months and ${days} Days`);

	// months are zero indexed
	qualifying_service = months > 5 ? years+1 : years;
	qualifying_service_text = document.createTextNode(`${qualifying_service} Years`);

	var factor = qualifying_service >= 30 ? 1 : qualifying_service/30;
	monthly_pension = document.createTextNode(`Rs. ${(avg/2)*factor}`);
	family_pension = document.createTextNode(`Rs. ${0.3*last_pay}`);

	replaceIfDuplicate('ts', total_service_text);
	replaceIfDuplicate('qs', qualifying_service_text);
	replaceIfDuplicate('pension', monthly_pension);
	replaceIfDuplicate('family_pension', family_pension);
}

function replaceIfDuplicate(id, newNode) {
	tagId = document.getElementById(id)
	if (tagId.childNodes.length > 1) {
		tagId.replaceChild(newNode, tagId.childNodes[1]);
	} else {
		tagId.appendChild(newNode);
	}
}
