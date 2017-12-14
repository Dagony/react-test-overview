


// Search issue handling
	
function openIssue(data) {
	let issue = document.issue_form.issue.value;
	if (issue !== "") {
		let issueRegex = /^(CTC|CON|PROJ|UT|XPL|XILLP)\-\d{3,5}$/gi;
		if (issue.match(issueRegex)) {
			window.open("https://xillio.atlassian.net/browse/" + issue);
			console.log(issue);
		} else {
			// alert("Issue number '" + issue + "' is incorrect and can not be opened");
			window.open("https://xillio.atlassian.net/browse/" + issue);
		}		
	}	
}