/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name":"Johnson Tai",
    "role":"Front End Web Developer",
    "contact":{"mobile":"(858)252-9157", "email":"johnsont426@gmail.com", "github":"https://github.com/johnsont426", "facebook":"https://www.facebook.com/chuanshengtai"},
    "skills":["HTML", "CSS", "JavaScript"],
    "welcomeMessage":"Hi there",
    "biopic":"images/Johnson.jpg"
  };

var work = {
  "jobs":[
  {"employer":"Isola Group",
"title":"Contract Analyst",
"location":"Tempe, AZ",
"dates":"Feburary 2017 - ",
"description":"1. Translated contracts from English to Chinese or vice versa\n2. Analyzed contracts and checked for any conflict with the company's interests."
},
{"employer":"National Chung Cheng University",
"title":"Cashier",
"location":"Chiayi, Taiwan",
"dates":"September 2012 - January 2013",
"description":"Performed cashiering service. Calculated the total ammount of daily transactions."}
]}

var education={
  "schools":[
    {"name":"Arizona State University",
    "degree":"Master of Law",
    "location":"Tempe,AZ",
    "dates": "May 2017",
    "url":"",
    "major":["Law"]
  },
    {"name":"Tunghai University",
    "degree":"Bachelor of Law",
    "location":"Taichung, Taiwan",
    "dates": "June 2015",
    "url":"",
    "major":["Law"]
    }],
  "onlineCourses":[
    {"title":"Front-End Web Developer Nanodegree",
    "name":"Udacity",
    "dates":"January 2017 - May 2017"
  },
    {"title":"Front-End Web Developer Certificate",
    "Name":"Free Code Camp",
    "dates":"January 2017 - May 2017"
    }
    ]
};
var projects = [
  {"title":"Portfolio",
  "dates":"January 2017",
  "description":"This is the first project of the Front-End Web Development Nanodegree at Udacity",
  "image":["",""]
},
{
  "title":"Resume",
  "dates":"January 2017",
  "description":"Second project",
  "image":["",""]
}
];

var formattedHeaderName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedHeaderName);
$("#header").append(HTMLheaderRole.replace("%data%",bio.role));
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic))
$("#header").append(HTMLcontactList);
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contact.github));
$("#topContacts").append(HTMLfacebook.replace("%data%",bio.contact.facebook));

if (bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
}

work.jobs.forEach(function(job,index){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[index].employer);
  var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[index].title);
  var formattedEmployerTitle=formattedEmployer+formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates=HTMLworkDates.replace("%data%",work.jobs[index].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[index],location);
  $(".work-entry:last").append(formattedLocation);
  var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[index].description);
  $(".work-entry:last").append(formattedDescription);
});

//internationalize button

function inName(name){
  var nameArray=name.trim().split(" ");
  nameArray[0]=nameArray[0].slice(0,1).toUpperCase()+nameArray[0].slice(1).toLowerCase();
  nameArray[1]=nameArray[1].toUpperCase();
  var internationalizedName=nameArray.join(" ");
  return internationalizedName
}
$("#main").append(internationalizeButton);

//projects

projects.display=function(){
  projects.forEach(function(project,index){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle=HTMLprojectTitle.replace("%data%",projects[index].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates=HTMLprojectDates.replace("%data%",projects[index].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription=HTMLprojectDescription.replace("%data%",projects[index].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImage=HTMLprojectImage.replace("%data%",projects[index].Image);
    $(".project-entry:last").append(formattedImage);
  })
}
projects.display();

//education-schools

education.schools.forEach(function(school,index){
  $("#education").append(HTMLschoolStart);
  var formattedName=HTMLschoolName.replace("%data%",education.schools[index].name);
  $(".education-entry:last").append(formattedName);
  var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[index].degree);
  $(".education-entry:last").append(formattedDegree);
  var formattedDates=HTMLschoolDates.replace("%data%",education.schools[index].dates);
  $(".education-entry:last").append(formattedDates);
  var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[index].location);
  $(".education-entry:last").append(formattedLocation);
  var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[index].major);
  $(".education-entry:last").append(formattedMajor);

});

//education-online courses

$("#education").append(HTMLonlineClasses);
education.onlineCourses.forEach(function(course,index){
  $("#education").append(HTMLschoolStart);
  var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[index].title);
  $(".education-entry:last").append(formattedTitle);
  var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[index].school);
  $(".education-entry:last").append(formattedSchool);
  var formattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[index].dates);
  $(".education-entry:last").append(formattedDates);
  })
