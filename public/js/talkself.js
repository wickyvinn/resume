var talkself = {
	"about":"I'm Vicky Nguyen and I do software development in San Francisco.</p>",
	"leisure":"I love rock-climbing and playing piano. <p>My buddy and I write short stories in a shared blog, which we hide <a href='http://thebunkum.tumblr.com'>here</a>.</p> <p>My poisons of choice are scotch and Mexi-cokes.</p>",
	"vita":"UC Berkeley's Applied Mathematics and English departments (2006-2010). <p><a href='http:www.hackbrightacademy.com'>Hackbright Academy</a>, where I learned how to code properly (Summer 2013)</p> <p>Before that I was a resarch manager at a finance services company called <a href='http://www.glasslewis.com'>Glass Lewis & Co.</a>, where I designed databases and built data visualization tools using Python and MySQL (2010-2013).</p> <p>I spent a summer in Cairo teaching Southern Sudanese refugee children English and Algebra while their nation eagerly awaited the results of the referendum for seceding. Some essays cataloging my experiences can be found <a href='/cairo'>here</a> (Summer 2010). </p>"
}

// set initial look
document.getElementById("talkselfjs").innerHTML = talkself["about"]
// method

function whatClicked(section) {
    
	// set the html based on the section
    document.getElementById("talkselfjs").innerHTML = talkself[section]
    
};

// event
// ask someone why this works without setting the document identified by id 
about.addEventListener('click', function () { whatClicked("about"); }, false);
leisure.addEventListener('click', function () { whatClicked("leisure"); }, false);
vita.addEventListener('click', function () { whatClicked("vita"); }, false);
