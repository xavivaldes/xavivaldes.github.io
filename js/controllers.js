var cvApp = angular.module('cvApp', []);

cvApp.controller('cvController', loadJSON);

function loadJSON($scope) {
    $scope.cv =
        {
            "profile": {
                "name": "Xavi Valdés",
                "title": "Software Engineer",
                "linkedIn": "www.linkedin.com/pub/xavi-vald%C3%A9s-llonch/14/bbb/168",
                "placeOfResidence": "Santa Perpètua de Mogoda, Barcelona, Spain",
                "email": "xavivaldes@gmail.com",
                "web": "www.xavivaldes.com",
                "nationality": "Spanish",
                "dateOfBirth": "12 January 1985",
                "others": "Driving licence and own transport",
                "introduction": "Hello world! My name is Xavi Valdés. I'm Software Engineer specialized in Scraping and API integration technologies. I was working in OTA industry until 2019, when I leave my Lead Engineer job to start a personal project: travel around the world. Since then I'm freelancer and traveller. I love software and electronics, so I work as freelancer Software Engineer and I invest a lot of time improving the electronic system on my van.",
                "image": "img/xavi_pamukkale.jpg"
            },
            "educations": [
                {
                    "dates": "2017",
                    "titleOfQualification": "Java SE 8 Programmer Certification",
                    "institution": "by Oracle"
                },
                {
                    "dates": "2014 - 2015",
                    "titleOfQualification": "Android Development",
                    "institution": "at UNED"
                },
                {
                    "dates": "2013 - paused",
                    "titleOfQualification": "Bachelor's Degree in Physics",
                    "institution": "at UNED"
                },
                {
                    "dates": "2011",
                    "titleOfQualification": "Java Standard Edition 6 Programmer Certification",
                    "institution": "by Oracle"
                },
                {
                    "dates": "2010 - 2012",
                    "titleOfQualification": "University Master in Computer Science Engineering and its Management",
                    "institution": "at La Salle (URL Universitat Ramon Llull)"
                },
                {
                    "dates": "2006 - 2009",
                    "titleOfQualification": "Computer Science Engineering",
                    "institution": "at La Salle (URL Universitat Ramon Llull)"
                },
                {
                    "dates": "2003 - 2006",
                    "titleOfQualification": "Bachelor’s Degree in Computer Science Engineering",
                    "institution": "at La Salle (URL Universitat Ramon Llull)"
                }
            ],
            "experiences": [
                {
                    "company": "Freelance",
                    "jobs": [
                        {
                            "dates": "Sep. 2019 - present",
                            "jobTitle": "Software Engineer"
                        }
                    ],
                    "description": "Helping companies to integrate different systems. API integration, or creating APIs from scratch. Example of APIs: Airtable, Widen, FrameIO, Google Docs."
                },
                {
                    "company": "ODIGEO eDreams",
                    "jobs": [
                        {
                            "dates": "Aug. 2016 - Aug. 2019",
                            "jobTitle": "Lead Engineer"
                        },
                        {
                            "dates": "Dec. 2012 - Aug. 2016",
                            "jobTitle": "Senior Software Engineer"
                        }
                    ],
                    "description": "Last years working as a Lead of a team responsible for Scraping and API integrations with providers. Specialist in Scraping and anonymous technologies."
                },
                {
                    "company": "AGBAR",
                    "jobs": [
                        {
                            "dates": "Jan. 2011 - Nov. 2012",
                            "jobTitle": "Java Architect"
                        },
                        {
                            "dates": "Aug. 2010 - Dec. 2010",
                            "jobTitle": "Java Developer"
                        }
                    ],
                    "description": "First as Analyst Developer, and then as Java Architect. Multinational group from Barcelona. Technical leader of a small development team for Aquacis CF software. This software manages all the water billing for most cities of Spain, providing CRM functionalities too. Many hundreds of concurrent users. The application was implanted to other countries too, like Algeria or Chile."
                },
                {
                    "company": "AXA Winterthur",
                    "jobs": [
                        {
                            "dates": "Nov. 2008 - Jul. 2010",
                            "jobTitle": "Java Developer"
                        }
                    ],
                    "description": "Analyst developer for RPS software. RPS manages all the insurance policies of AXA/Winterthur: its billings, CRM, policies. Many hundreds of concurrent users."
                },
                {
                    "company": "Rotomolding Products",
                    "jobs": [
                        {
                            "dates": "Feb. 2003 – Oct. 2008",
                            "jobTitle": "Software engineer"
                        }
                    ],
                    "description": "Family business. Analysing, designing and developing the corporate application GESROT. An ERP+CRM that included production control, personal control and stock control through PLC communications. In industrial section too, developing and managing logic automation of the machines and SCADA systems for rotomolding machines."
                },
                {
                    "company": "Jad Machines",
                    "jobs": [
                        {
                            "dates": "Mar. 2002 - Jan. 2003:",
                            "jobTitle": "Developer"
                        }
                    ],
                    "description": "Designing and developing PLC programs. Designing and developing self SCADA interfaces, using industrial PCs."
                }
            ],
            "skills": [
                {
                    "title": "Languages",
                    "elements": [
                        {
                            "name": "Catalan",
                            "level": "5"
                        },
                        {
                            "name": "Spanish",
                            "level": "5"
                        },
                        {
                            "name": "English",
                            "level": "4"
                        },
                        {
                            "name": "Java EE",
                            "level": "5"
                        },
                        {
                            "name": "JavaScript",
                            "level": "4"
                        },
                        {
                            "name": "Nodejs",
                            "level": "4"
                        },
                        {
                            "name": "C/C++",
                            "level": "4"
                        },
                        {
                            "name": "Kotlin",
                            "level": "3"
                        },
                        {
                            "name": "Python",
                            "level": "2"
                        }
                    ]
                },
                {
                    "title": "Platforms",
                    "elements": [
                        {
                            "name": "PC (Windows/Unix)",
                            "level": "5"
                        },
                        {
                            "name": "Web",
                            "level": "4"
                        },
                        {
                            "name": "AWS",
                            "level": "4"
                        },
                        {
                            "name": "Android",
                            "level": "3"
                        },
                        {
                            "name": "Arduino",
                            "level": "4"
                        },
                        {
                            "name": "Raspberry Pi",
                            "level": "4"
                        },
                        {
                            "name": "Electronics",
                            "level": "3"
                        },
                        {
                            "name": "PLC/Industrial systems",
                            "level": "3"
                        }
                    ]
                }
            ]
        };
}
