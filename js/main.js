
/******************************** PROJECTS ************************************/
var projects = {
  "projects" : [{
      "title" : "Feedreader Testing",
      "url" : "p06-feed-reader-testing/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p06-feed-reader-testing",
      "pic" : "img/p06.PNG",
      "description" : "I was given a web-based application that reads RSS feads. I wrote a number of tests against this pre-existing application with Jasmine, to test the underlying business logic of the application as well as the event handling and DOM manipulation.",
      "usedTechnology" : ""
    },
    {
      "title" : "Neighborhood Map",
      "url" : "p05-neighborhood-map/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p05-neighborhood-map",
      "pic" : "img/p05.PNG",
      "description" : "I developed a single-page application featuring a map of a neighborhood. I added additional functionality to this application, including: map markers, a search function, and a listview. I also implemented a third-party API that provides additional information about the shown locations.",
      "usedTechnology" : ""
    },
    {
      "title" : "Website Optimization",
      "url" : "p04-website-optimization/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p04-website-optimization",
      "pic" : "img/p04.PNG",
      "description" : "I had to optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score of 90 and runs at 60 frames per second.",
      "usedTechnology" : ""
    },
    {
      "title" : "Classic Arcade Game",
      "url" : "p03-classic-arade-game/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p03-classic-arcade-game",
      "pic" : "img/p03.PNG",
      "description" : "I have been provided with visual assets and a game loop engine; using these tools I had to add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
      "usedTechnology" : ""
    },
    {
      "title" : "Online Resume",
      "url" : "p02-online-resume/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p02-online-resume",
      "pic" : "img/p02.PNG",
      "description" : "I developed an interactive resume application that reads my resume content from a JSON file and dynamically displays that content within a provided template. I had to use objects, functions, conditionals, and control structures to compose the content that is displayed on the resume",
      "usedTechnology" : ""
    },
    {
      "title" : "Portfolio Site",
      "url" : "p01-portfolio-site/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io",
      "pic" : "img/p01.PNG",
      "description" : "I was provided with a design mockup as a PDF-file and had to replicate that design in HTML and CSS. I had to develop a responsive website that would display images, descriptions and links to each of the portfolio projects I completed throughout the course of the Front-End Web Developer Nanodegree.",
      "usedTechnology" : ""
    }
  ]
};

/* Helpers to apply Objects to html */

var HTMLprojectFeatured = '<div class="row featured-project-entry"</div>';
var HTMLprojectStart = '<div class="row projects-entry"></div>';

var HTMLprojectImage = '<img src="%data%" class="col-md-6 project-pic">';
var HTMLprojectImageLink = '<a href="projects.html"><img src="%data%" class="col-md-6 project-pic"></a>';

var HTMLprojectTitle = '<h3>%data%</h3>';
var HTMLprojectTitleLink = '<a href="projects.html"><h3>%data%</h3></a>';

var HTMLprojectUrl = '<a href="#">%data%</a>';
var HTMLprojectDescription = '<p> ' + '%data%' + '</p>';
var HTMLprojectUsedTechnology = '<p> ' + '%data%' + '</p>';

var HTMLprojectButton= '<a class="btn btn-default link-button" href="%data%" role="button">Website</a>';
var HTMLprojectGithub = '<a class="btn btn-default link-button" href="%data%" role ="button">Github</a>';

/* Display projects function */
projects.display = function () {
  for (var i = 0; i < 1; i++){
    // Add to index.html with links to projects.html
    $("#featured-project").append(HTMLprojectFeatured);

    var formattedTitle = HTMLprojectTitleLink.replace("%data%", projects.projects[i].title);
    var formattedUrl = HTMLprojectUrl.replace("%data%", projects.projects[i].url);
    var formattedPic = HTMLprojectImageLink.replace("%data%", projects.projects[i].pic);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    //var formattedUsedTechnology = HTMLprojectUsedTechnology.replace("%data%", projects.projects[i].usedTechnology);

    $(".featured-project-entry").append(formattedPic, formattedTitle, formattedDescription);
  }

  // Add to projects.html
  for(var i = 0; i < projects.projects.length; i++){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedUrl = HTMLprojectUrl.replace("%data%", projects.projects[i].url);
    var formattedPic = HTMLprojectImage.replace("%data%", projects.projects[i].pic);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    var formattedUsedTechnology = HTMLprojectUsedTechnology.replace("%data%", projects.projects[i].usedTechnology);
    var formattedButton = HTMLprojectButton.replace("%data%", projects.projects[i].url);
    var formattedGithub = HTMLprojectGithub.replace("%data%", projects.projects[i].github);
    $(".projects-entry:last").append(formattedPic, formattedTitle, formattedDescription, formattedUsedTechnology, formattedButton, formattedGithub);
  }
};

projects.display();

/*******************************  ABOUT ME **********************************/
var aboutMe = {
  "pic": "",
  "description": "I'm a graduate from Udacitys Nanodegree program 'Front-End Web Development'. This course taught me a lot about HTML5, CSS3, JavaScript, jQuery, Bootstrap,  JSON, Responsive Design, Optimization, AJAX, APIs, Testing (with JasmineJS) ,Design-Mock-up and more. Take a look at " + '<a href="projects.html" style="color: blue; text-decoration: underline;">my Portfolio</a>' + " to get a feeling. ",
  "personal": "In 2017 I decided to do a career-change and move myself into the world of web development. After working as a Department Manager, Hotel Assistent Manager and in City Logistics, I was tempted to take on the challenge to learn something completely new. "
};

var HTMLaboutStart = '<div class="row about-entry"</div>';
var HTMLaboutPic = '<img src="%data%" class="col-md-6 contact-pic">';
var HTMLaboutDescription = '<p>%data%</p>';
var HTMLaboutPersonal = '<p>%data%</p>';

aboutMe.display = function () {
  var formattedAboutPic = HTMLaboutPic.replace("%data%", aboutMe.pic);
  var formattedAboutDescription = HTMLaboutDescription.replace("%data%", aboutMe.description);
  var formattedAboutPersonal = HTMLaboutPersonal.replace("%data%", aboutMe.personal);

  $("#about-me").append(HTMLaboutStart);
  $(".about-entry").append(formattedAboutPersonal, formattedAboutDescription);
};

aboutMe.display();

/********************************************************************/
