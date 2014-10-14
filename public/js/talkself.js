var talkself = {
	"about":"I'm Vicky Nguyen, a software engineer at <a href='http://www.versal.com'>Versal</a>. Born and raised in Orange County, live and work in San Francisco.",
	"leisure":"I love rock-climbing and swimming. My buddy and I write short stories in a shared blog, which we hide <a href='http://thebunkum.tumblr.com'>here</a>. My poisons of choice are Mexican cokes and cigars.",
	"vita":"I hail from UC Berkeley's Math and English departments (2006-2010), then <a href='http:www.hackbrightacademy.com'>Hackbright Academy</a>, where I learned how to code properly (Summer 2013). </p><p>Nowadays, I spend most of my time writing in Scala for the platform team at <a href='http://www.versal.com'>Versal</a>, an open publishing platform for anyone to create interactive online courses (2013-now). </p> <p>Before that I was a resarch manager at a finance services company called <a href='http://www.glasslewis.com'>Glass Lewis & Co.</a>, where I designed databases and built data visualization tools using Python and MySQL (2010-2013).</p> <p>I spent a summer in Cairo teaching Southern Sudanese refugee children English and Algebra while their nation eagerly awaited the results of the referendum for seceding. Some essays cataloging my experiences can be found <a href='/cairo'>here</a> (Summer 2010). </p>"
}

// set initial look
document.getElementById("talkselfjs").innerHTML = talkself["about"]
// method

function whatClicked(section) {
    
    // get rid of the creds. they're annoying
	document.getElementById("creds").innerHTML = ""
	
	// set the html based on the section
    document.getElementById("talkselfjs").innerHTML = talkself[section]
    
};

// event
// ask someone why this works without setting the document identified by id 
about.addEventListener('click', function () { whatClicked("about"); }, false);
leisure.addEventListener('click', function () { whatClicked("leisure"); }, false);
vita.addEventListener('click', function () { whatClicked("vita"); }, false);
