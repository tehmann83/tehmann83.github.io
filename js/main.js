var projects = {
  "projects" : [{
      "title" : "Feedreader Testing",
      "url" : "p06-feed-reader-testing/index.html",
      "pic" : "img/p06.PNG",
      "description" : "",
      "usedTechnology" : ""
    },
    {
      "title" : "Neighborhood Map",
      "url" : "p05-neighborhood-map/index.html",
      "pic" : "img/p05.PNG",
      "description" : "",
      "usedTechnology" : ""
    },
    {
      "title" : "Website Optimization",
      "url" : "p04-website-optimization/index.html",
      "pic" : "img/p04.PNG",
      "description" : "",
      "usedTechnology" : ""
    },
    {
      "title" : "Classic Arcade Game",
      "url" : "p03-classic-arade-game/index.html",
      "pic" : "img/p03.PNG",
      "description" : "",
      "usedTechnology" : ""
    },
    {
      "title" : "Online Resume",
      "url" : "p02-online-resume/index.html",
      "pic" : "img/p02.PNG",
      "description" : "",
      "usedTechnology" : ""
    },
    {
      "title" : "Portfolio Site",
      "url" : "p01-portfolio-site/index.html",
      "pic" : "img/p01.PNG",
      "description" : "",
      "usedTechnology" : ""
    }
  ]
};

/* Helpers to apply Objects to html */
var HTMLprojectStart = '<div class="projects-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectUrl = '<br><a href="#">%data%</a>';
var HTMLprojectPic = '<img src="%data%" class="project-pic">';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectUsedTechnology = '<p><br>%data%</p>';

/* Display projects function */
projects.display = function () {
  for(var i = 0; i < projects.projects.length; i++){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedUrl = HTMLprojectUrl.replace("%data%", projects.projects[i].url);
    var formattedPic = HTMLprojectPic.replace("%data%", projects.projects[i].pic);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    var formattedUsedTechnology = HTMLprojectUsedTechnology.replace("%data%", projects.projects[i].usedTechnology);

    $(".projects-entry:last").append(formattedTitle, formattedUrl, formattedPic, formattedDescription, formattedUsedTechnology);
  }
};

projects.display();
