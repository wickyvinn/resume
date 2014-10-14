// addresses of the pics
var icons = {
	"github": {
		"wbAddress":"images/github.png",
		"colorAddress":"images/github_other2.png"	
	},
	"twitter": {
		"wbAddress":"images/twitter.png",
		"colorAddress":"images/twitter_other2.png"	
	},
	"linkedin":	{
		"wbAddress":"images/linkedin.png",
		"colorAddress":"images/linkedin_other2.png"	
	},
	"gmail": {
		"wbAddress":"images/gmail.png",
		"colorAddress":"images/gmail_other.png"	
	}
}

// selectors

var github = document.getElementById("github")
github.setAttribute("src", icons["github"].wbAddress)

var twitter = document.getElementById("twitter")
twitter.setAttribute("src", icons["twitter"].wbAddress)

var linkedin = document.getElementById("linkedin")
linkedin.setAttribute("src", icons["linkedin"].wbAddress)

var gmail = document.getElementById("gmail")
gmail.setAttribute("src", icons["gmail"].wbAddress)


// methods

function colorIcon(iconName) {
	document.getElementById(iconName).setAttribute("style", "content: url("+ icons[iconName].colorAddress +")")
}

function wbIcon(iconName) {
	document.getElementById(iconName).setAttribute("style", "content: url("+ icons[iconName].wbAddress +")")
}

// events

github.addEventListener("mouseover", function () { colorIcon("github");} , false);
github.addEventListener("mouseout", function () { wbIcon("github");} , false);

twitter.addEventListener("mouseover", function () { colorIcon("twitter");} , false);
twitter.addEventListener("mouseout", function () { wbIcon("twitter");} , false);

linkedin.addEventListener("mouseover", function () { colorIcon("linkedin");} , false);
linkedin.addEventListener("mouseout", function () { wbIcon("linkedin");} , false);

gmail.addEventListener("mouseover", function () { colorIcon("gmail");} , false);
gmail.addEventListener("mouseout", function () { wbIcon("gmail");} , false);
