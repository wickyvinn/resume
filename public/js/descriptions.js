var body = [
	{	
		"sectionLabel":"work1",
		"title":"Versal Group",
		"textLines":[
			"Backend Engineer",
			"Build RESTful API",
			"Scala, MySQL, StateT"
		]
	},
	{	
		"sectionLabel":"work2",
		"title":"Glass Lewis & Co.",
		"textLines":[
			"Manager of Executive Compensation",
			"A bunch of DB stuff",
			"Python, SQL"
		]
	},
	{
		"sectionLabel":"education1",
		"title":"University of California, Berkeley",
		"textLines":[
			"Graduated in 2010", 
			"B.A. in Applied Mathematics & English"
		]
	},
	{
		"sectionLabel":"education2",
		"title":"Hackbright Academy",
		"textLines":[
			"Summer 2013",
			"Python, Javascript, SQL", 
			"Built a cool fashion thing"
		]
	}
]

for (sectionItem = 0; sectionItem < body.length; sectionItem++) {
	var section = body[sectionItem]

	// set section label for js purposes only
	var sectionLabel = body[sectionItem]["sectionLabel"]

	// set the section title html and class
	document.getElementById(sectionLabel + "Title").innerHTML = section.title
	document.getElementById(sectionLabel + "Title").setAttribute("class", "sectionTitle")

	// set the section text html
	var bodyText = ""
	for (i = 0; i < section.textLines.length; i++) { 
		bodyText += "<br>" + section.textLines[i] ;
	}
	document.getElementById(sectionLabel + "Text").innerHTML = bodyText
	document.getElementById(sectionLabel + "Text").setAttribute("class", "sectionText")
}