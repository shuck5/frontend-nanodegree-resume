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
    "schools": [{
            "name": "Arizona State University",
            "location": "Tempe, AZ",
            "degree": "B.A.",
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

    "onlineCourses": [{
            "title": "Front-End Web Developement Nanodegree",
            "school": "Udacity",
            "dates": "June 2016",
            "url": "http://udacity.com/"
        },

        {
            "title": "Front-End Web Developement Track",
            "school": "Treehouse",
            "dates": "May 2016",
            "url": "http://teamtreehouse.com/"
        },

        {
            "title": "JavaScript",
            "school": "Code School",
            "dates": "May 2016",
            "url": "http://codeschool.com/"
        }
    ]
};

var work = {
    "jobs": [{
        "title": "Office Manager",
        "employer": "Napa Winery Inn",
        "dates": "08/2012 - Present",
        "location": "Napa, CA",
        "description": "Human Resources, Social Media Manager, Accounting, Customer Service, Multiple Phone Lines, Excel, MS Office"
    }, {
        "title": "Freelance Website Builder",
        "employer": "Freelance",
        "dates": "03/2016 - Present",
        "location": "Napa, CA",
        "description": "HTML5, CSS3, JavaScript, Twitter Bootstrap. Did freelance work building websites for multiple businesses."
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "06/2016",
        "description": "https://github.com/shuck5/Portfolio",
        "images": ["images/fry.jpg"]
    }, {
        "title": "TBD",
        "dates": "TBD",
        "description": "TBD",
        "images": ["images/fry.jpg"]
    }]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts[0].email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts[0].github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts[0].location));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    for (i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    };

}();


work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
};

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (i in education.schools) {
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

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses) {
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
};

education.display();

$("#mapDiv").append(googleMap);