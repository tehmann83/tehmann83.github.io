// bio-object contains biographical information
var bio = {
  "name" : "Thomas Ehmann",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "+43-677-617-11811",
    "email" : "ehmannth@gmail.com",
    "github" : "tehmann83",
    "linkedIn" : "linkedin.com/in/tehmann/",
    "location" : "Rotterdam, NL"
  },
  "welcomeMessage" : "Welcome to my Resume! Feel free to contact me.",
  "skills" : ["Java", "HTML5", "CSS3", "JavaScript", "jQuery", "Unix/Linux", "Android", "XML"],
  "bioPic" : "/images/me3.JPG"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedIn);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(formattedMessage);
  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLinkedin, formattedLocation);
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLinkedin, formattedLocation);
  // skills
  $("#header").append(HTMLskillsStart);

  for(var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
};

var education = {
  "schools" : [{
      "name" : "University of Salzburg",
      "location" : "Salzburg, AT",
      "degree" : "Bachelor of Science",
      "majors" : ["Linguistics ", "Computer Science "],
      "dates" : "2012 - 2017"
    },
    {
      "name" : "University of Salzburg",
      "location" : "Salzburg, AT",
      "degree" : "Scientific Photographer",
      "majors" : ["Digital Photography & Digital Image Processing"],
      "dates" : "2013 - 2014"
    },
    {
      "name" : "Tourism Schools Salzburg",
      "location" : "Klessheim, AT",
      "degree" : "Hospitality Manager",
      "majors" : ["Hotel assistent"],
      "dates" : "2006 - 2008"
    },
    {
      "name" : "Red Cross Austria",
      "location" : "Salzburg, AT",
      "degree" : "Paramedic",
      "majors" : [],
      "dates" : "2004 - 2005"
    }
  ],
  "onlineCourses" : [{
      "title" : "Front-End Web-Developer",
      "school" : "Udacity",
      "dates" : "April, 2017",
      "url" : "https://de.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    },
    {
      "title" : "Android Development",
      "school" : "Udacity (via EU-Scholarship Program)",
      "dates" : "March, 2017",
      "url" : "http://blog.udacity.com/2016/12/announcing-10000-new-scholarships-android-developers.html"
    }
  ],
  "languages" : [{
      "language" : "Turkish",
      "school" : "University of Salzburg",
      "location" : "Salzburg, AT",
      "dates" : "2013 - 2014"
    },
    {
      "language" : "Spanish",
      "school" : "University of Salzburg",
      "location" : "Salzburg, AT",
      "dates" : "2012 - 2013"
    },
    {
      "language" : "French",
      "school" : "Polgargymnasium",
      "location" : "Vienna, AT",
      "dates" : "1998 - 2002"
    }
  ]
};

// display function for education content
education.display = function() {
  // Add education entry for each school
  for(var i = 0; i < education.schools.length; i++){
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var formattedMajors =  HTMLschoolMajor.replace("%data%", education.schools[i].majors);

    $(".education-entry:last").append(formattedSchool, formattedDegree, formattedDates, formattedLocation);

    if (education.schools[i].majors.length > 0)
      $(".education-entry:last").append(formattedMajors);
  }
  $('#education').append(HTMLonlineClasses);
  // Add online classes to education section
  for (var i = 0; i < education.onlineCourses.length; i++){
    $("#education").append(HTMLschoolStart);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

    $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
  }
  $('#education').append(HTMLlanguageClasses);
  // Add language classes to education section
  for (var i = 0; i < education.languages.length; i++){
    $("#education").append(HTMLschoolStart);
    var formattedLanguage = HTMLlanguageTitle.replace("%data%", education.languages[i].language);
    var formattedLanguageSchool = HTMLlanguageSchool.replace("%data%", education.languages[i].school);
    var formattedLanguageLocation = HTMLlanguageLocation.replace("%data%", education.languages[i].location);
    var formattedLanguageDates= HTMLlanguageDates.replace("%data%", education.languages[i].dates);

    $('.education-entry:last').append(formattedLanguage, formattedLanguageSchool, formattedLanguageLocation, formattedLanguageDates);
  }
};

// work-object contains work experience
var work = {
  "jobs" : [{
      "employer" : "Self-employed",
      "title" : "Web-Developer",
      "location" : "Rotterdam, NL",
      "dates" : "2017",
      "description" : "Front-End Web-Developer"
    },
    {
      "employer" : "Self-employed",
      "title" : "City Logistics",
      "location" : "Salzburg, AT",
      "dates" : "2011 - 2016",
      "description" : "Part of the Future City Logistics 4.0 Program. Ecologically sustainable development at the transporting-goods-department "
    },
    {
      "employer" : "InterContinental Hotels Group plc (IHG)",
      "title" : "Hotel assistent",
      "location" : "Salzburg, AT",
      "dates" : "2006 - 2011",
      "description" : "Administration, Marketing, Managing budgets & financial plans, Setting & achieving sales and profit targets, Analysing & devising marketing and revenue management strategies, Sourcing new potential suppliers & products"
    },
    {
      "employer" : "Rewe International AG",
      "title" : "Retail sales - Department Manager",
      "location" : "Vienna, AT",
      "dates" : "2000 - 2006",
      "description" : "Department Manager in a Rewe store, Sourcing, Merchandising, Accounting, Administration, Manage a team of 20 Sales persons, Responsibility of 5 Million EUR turnover "
    }
  ]
};

// display function for work content
work.display = function() {
  for(var i = 0; i < work.jobs.length; i++){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

    $(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
  }
};

// project-object
var projects = {
  "projects" :  [{
      "title" : "Istanbul United",
      "dates" : "2013",
      "location" : "Istanbul, TR",
      "description" : "Documentary photography of the \"Occupy Gezi\"-Movement.",
      "images" : ["images/girlTaksim.JPG"]
  },]
};

projects.display = function() {
  for(var i = 0; i < projects.projects.length; i++){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedLocation = HTMLprojectLocation.replace("%data%", projects.projects[i].location);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

    $(".project-entry:last").append(formattedTitle, formattedDates, formattedLocation, formattedDescription);

    if (projects.projects[i].images.length > 0){
      for (j = 0; j < projects.projects[i].images.length; j++){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

// calling the display functions
bio.display();
work.display();
projects.display();
education.display();

// --------------------internationalizeButton -----------------------
function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
// ----------------- see a map -----------------------
$("#mapDiv").append(googleMap);
