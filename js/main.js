var projects = {
  "projects" : [{
      "title" : "Feedreader Testing",
      "url" : "p06-feed-reader-testing/index.html",
      "pic" : "img/p06.PNG",
      "description" : "descr",
      "usedTechnology" : "used tech"
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

var HTMLprojectFeatured = '<div class="row featured-project-entry"</div>';
var HTMLprojectStart = '<div class="row projects-entry"></div>';

var HTMLprojectPic = '<img src="%data%" class="col-md-6 project-pic">';



/* TODO: Connect title with url.
 * TODO: In a row two columns with col-md-6. Left: Clickable picture,
 *       Right: Title/URL, Description, Links to website and github EXTRA
 *                                                      via button!
 *
*/
var HTMLprojectTitle = '<h3>%data%</h3>';
var HTMLprojectUrl = '<a href="#">%data%</a>';
var HTMLprojectDescription = '<h4>Description:</h4>'+'<p> ' + '%data%' + '</p>';
var HTMLprojectUsedTechnology = '<h4>Used Technology:</h4>'+'<p> ' + '%data%' + '</p>';

/* Display projects function */
projects.display = function () {
  for (var i = 0; i < 1; i++){
    $("#featured-project").append(HTMLprojectFeatured);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedUrl = HTMLprojectUrl.replace("%data%", projects.projects[i].url);
    var formattedPic = HTMLprojectPic.replace("%data%", projects.projects[i].pic);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    var formattedUsedTechnology = HTMLprojectUsedTechnology.replace("%data%", projects.projects[i].usedTechnology);

    $(".featured-project-entry").append(formattedPic, formattedTitle, formattedUrl, formattedDescription, formattedUsedTechnology);
  }

  for(var i = 0; i < projects.projects.length; i++){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedUrl = HTMLprojectUrl.replace("%data%", projects.projects[i].url);
    var formattedPic = HTMLprojectPic.replace("%data%", projects.projects[i].pic);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    var formattedUsedTechnology = HTMLprojectUsedTechnology.replace("%data%", projects.projects[i].usedTechnology);

    $(".projects-entry:last").append(formattedPic, formattedTitle, formattedUrl, formattedDescription, formattedUsedTechnology);
  }
};

projects.display();
