var projects = {
  "projects" : [{
      "title" : "Feedreader Testing",
      "url" : "p06-feed-reader-testing/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p06-feed-reader-testing",
      "pic" : "img/p06.PNG",
      "description" : "descr",
      "usedTechnology" : "used tech"
    },
    {
      "title" : "Neighborhood Map",
      "url" : "p05-neighborhood-map/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p05-neighborhood-map",
      "pic" : "img/p05.PNG",
      "description" : "",
      "usedTechnology" : ""
    },
    {
      "title" : "Website Optimization",
      "url" : "p04-website-optimization/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p04-website-optimization",
      "pic" : "img/p04.PNG",
      "description" : "",
      "usedTechnology" : ""
    },
    {
      "title" : "Classic Arcade Game",
      "url" : "p03-classic-arade-game/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p03-classic-arcade-game",
      "pic" : "img/p03.PNG",
      "description" : "",
      "usedTechnology" : ""
    },
    {
      "title" : "Online Resume",
      "url" : "p02-online-resume/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io/tree/master/p02-online-resume",
      "pic" : "img/p02.PNG",
      "description" : "",
      "usedTechnology" : ""
    },
    {
      "title" : "Portfolio Site",
      "url" : "p01-portfolio-site/index.html",
      "github": "https://github.com/tehmann83/tehmann83.github.io",
      "pic" : "img/p01.PNG",
      "description" : "",
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
var HTMLprojectDescription = '<h4>Description:</h4>'+'<p> ' + '%data%' + '</p>';
var HTMLprojectUsedTechnology = '<h4>Used Technology:</h4>'+'<p> ' + '%data%' + '</p>';

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
    var formattedUsedTechnology = HTMLprojectUsedTechnology.replace("%data%", projects.projects[i].usedTechnology);

    $(".featured-project-entry").append(formattedPic, formattedTitle, formattedDescription, formattedUsedTechnology);
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
