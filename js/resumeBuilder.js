var formattedName = HTMLheaderName.replace("%data%", "Kadie Ford");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
var bio = {
	"name": "Kadie Ford",
	"address": "2187 Patton Ave, Napa CA 94559",
	"phone": "714-788-2274",
	"email": "kadie.ford@gmail.com",
	"role": "Front-End Web Developer",
	"photo": "images/profile.jpg",
	"welcome": "Welcome to my website!",
	"skills": ["HTML5", "CSS3", "JavaScript", "Twitter Bootstrap"]
};

// $("#main").append(bio.name);

var work = {
	"jobs": [
		{
		"title": "Office Manager",
		"employer": "Napa Winery Inn",
		"dates": "08/2012 - Present",
		"city": "Napa, CA",
		"description": "Human Resources, Social Media Manager, Accounting, Customer Service, Multiple Phone Lines, Excel, MS Office"
		},
		{
		"title": "Freelance Website Builder",
		"employer": "Freelance",
		"dates": "03/2016 - Present",
		"city": "Napa, CA",
		"description": "HTML5, CSS3, JavaScript, Twitter Bootstrap. Did freelance work building websites for multiple businesses."
		}


	]
};

var education = {
	"schools": [
		{
		"school": "Arizona State University",
		"graduation": "May 2016",
		"city": "Tempe, AZ",
		"major": "Psychology",
		"degree": "B.A." 
		},

		{
		"school": "Napa Valley College",
		"graduation": "May 2011",
		"city": "Napa, CA",
		"major": "Psychology",
		"degree": "A.A."
		},
		{
		"school": "Udacity",
		"graduation": "July 2016",
		"city": "Online",
		"major": "Front-End Web Developement",
		"degree": "Nanodegree"
		}
	]

}

var projects = {
	"Portfolio": "https://github.com/shuck5/Portfolio",
}

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}


displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);

});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " "+ name[1];

};
$("#main").append(internationalizeButton);
// $("#main").append(education.schools);