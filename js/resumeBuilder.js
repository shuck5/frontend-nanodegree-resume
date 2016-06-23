
var bio = {
	"name": "Kadie Ford",
	"role": "Front-End Web Developer",
	"contacts": [{
		"mobile": "714-788-2274",
		"email": "kadie.ford@gmail.com",
		"github": "http://github.com/shuck5",
		"location": "Napa, CA"
	}],
	"biopic": ["images/profile.jpg"],
	"welcomeMessage": "Welcome to my website!",
	"skills": ["HTML5", "CSS3", "JavaScript", "Twitter Bootstrap"]
};

var education = {
	"schools": [
		{
		"name": "Arizona State University",
		"location": "Tempe, AZ",
		"degree": "B.A." ,
		"major": "Psychology",
		"dates": "May 2016",
		"url": "http://asu.edu"
		},

		{
		"name": "Napa Valley College",
		"location": "Napa, CA",
		"degree": "A.A.",
		"major": "Psychology",
		"dates": "May 2011",
		"url": ["http://napavalleycollege.com"]
		}

	],

	"onlineCourses": [
		{
		"title": "Front-End Web Developement Nanodegree",
		"school": "Udacity",
		"date": "June 2016",
		"url": "http://udacity.com/"
		},
		
		{
		"title": "Front-End Web Developement Track",
		"school": "Treehouse",
		"date": "May 2016",
		"url": "http://teamtreehouse.com/"
		},
		
		{
		"title": "JavaScript",
		"school": "Code School",
		"date": "May 2016",
		"url": "http://codeschool.com/"
		}
	]
};

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

var projects = {
	"projects": [
	{
		"title": "Portfolio",
		"dates": "06/2016",
		"description": "https://github.com/shuck5/Portfolio",
		"images": ["images/fry.jpg"]
	},
	{
		"title": "TBD",
		"dates": "TBD",
		"description": "TBD",
		"images": ["images/fry.jpg"]
	}
	]
};
main.display = (function() {
	var name = bio.name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " "+ name[1];
	

})();
$("#main").append(internationalizeButton);


header.display = (function() {
	var formattedName = HTMLheaderName.replace("%data%", "Kadie Ford");
	var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");
	$("#header").prepend(formattedRole);$("#main").append(internationalizeButton);
	$("#header").prepend(formattedName);
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#topContacts").append(formattedContactInfo);

})();



workExperience.display = (function() {
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
})();


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);

});

projects.display = (function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage)
			}
		}
	}
})();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();


$("#mapDiv").append(googleMap);