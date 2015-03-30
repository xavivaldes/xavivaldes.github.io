var cvApp = angular.module('cvApp',[]);

cvApp.controller('cvController', loadJSON);

function loadJSON($scope) {
  $scope.cv =
    {
      "profile":{
        "name":"Xavi Valdés Llonch",
        "linkedIn":"www.linkedin.com/pub/xavi-vald%C3%A9s-llonch/14/bbb/168",
        "placeOfResidence":"Santa Perpètua de Mogoda, Barcelona, Spain",
        "email":"xavivaldes@gmail.com",
        "web":"www.xavivaldes.com",
        "nationality":"Spanish",
        "dateOfBirth":"12 January 1985",
        "others":"Driving licence and own transport"
      },
      "educations":[
      {
        "dates":"2013 - present",
        "titleOfQualification":"Bachelor's Degree in Physics",
        "institution":"at UNED"
      },
      {
        "dates":"2014",
        "titleOfQualification":"Android development course",
        "institution":"at UNED"
      },
      {
        "dates":"2011",
        "titleOfQualification":"Java Standard Edition 6 Programmer Certified",
        "institution":"by Oracle"
      },
      {
        "dates":"2008 - 2012",
        "titleOfQualification":"University Master in Computer Science Engineering and its Management",
        "institution":"at La Salle (URL Universitat Ramon Llull)"
      },
      {
        "dates":"2006 - 2010",
        "titleOfQualification":"Computer Science Engineering",
        "institution":"at La Salle (URL Universitat Ramon Llull)"
      },
      {
        "dates":"2003 - 2006",
        "titleOfQualification":"Bachelor’s Degree in Computer Science Engineering",
        "institution":"at La Salle (URL Universitat Ramon Llull)"
      }
      ],
      "experiences":[
      {
        "company":"ODIGEO eDreams",
        "jobs":[
        {
          "dates":"Dec. 2012 - present",
          "jobTitle":"Technical Analyst"
        }
        ],
        "description":"Technical leader of a development team. Responsible for the management, analysis and technical design."
      },
      {
        "company":"AGBAR",
        "jobs":[
        {
          "dates":"Jan. 2011 - Nov. 2012",
          "jobTitle":"Java EE Architect"
        },
        {
          "dates":"Aug. 2010 - Dec. 2010",
          "jobTitle":"Java EE Analyst Developer"
        }
        ],
        "description":"First as Analyst Developer, and then as Java Architect. Multinational group from Barcelona. Technical leader of a small development team for Aquacis CF software. This software manages all the water billing for most cities of Spain, providing CRM functionalities too. Many hundreds of concurrent users. The application was implanted to other countries too, like Algeria or Chile."
      },
      {
        "company":"AXA Winterthur",
        "jobs":[
        {
          "dates":"Nov. 2008 - Jul. 2010",
          "jobTitle":"Java EE Analyst Developer"
        }
        ],
        "description":"Analyst developer for RPS software. RPS manages all the insurance policies of AXA/Winterthur: its billings, CRM, policies. Many hundreds of concurrent users."
      },
      {
        "company":"Rotomolding Products",
        "jobs":[
        {
          "dates":"Jan. 2005 – Oct. 2008",
          "jobTitle":"Software engineer, development team’s leader"
        },
        {
          "dates":"Feb. 2003 – Nov. 2004",
          "jobTitle":"Analyst Developer"
        }
        ],
        "description":"Family business, first as developer and then as lead of a small team. Analysing, designing and developing the corporate application GESROT. An ERP+CRM that included production control, personal control and stock control through PLC communications. In industrial section too, developing and managing logic automation of the machines and SCADA systems for rotomolding machines."
      },
      {
        "company":"Jad Machines",
        "jobs":[
        {
          "dates":"Mar. 2002 - Jan. 2003:",
          "jobTitle":"Developer"
        }
        ],
        "description":"Family business. Designing and developing PLC programs. Designing and developing self SCADA interfaces, using industrial PCs."
      }
      ],
      "skills":[
        [
          {
            "title":"Languages",
            "elements":[
              {
                "name":"Catalan",
                "level":"5"
              },
              {
                "name":"Spanish",
                "level":"5"
              },
              {
                "name":"English",
                "level":"3"
              }
            ]
          },
          {
            "title":"Technologies",
            "elements":[
              {
                "name":"Java EE",
                "level":"5"
              },
              {
                "name":"Delphi",
                "level":"5"
              },
              {
                "name":"SOAP",
                "level":"5"
              },
              {
                "name":"XML",
                "level":"5"
              },
              {
                "name":"C/C++",
                "level":"4"
              },
              {
                "name":"JavaScript",
                "level":"4"
              },
              {
                "name":"Nodejs",
                "level":"4"
              },
              {
                "name":"Android",
                "level":"3"
              },
              {
                "name":"PHP",
                "level":"3"
              },
              {
                "name":"PLC/Industrial systems",
                "level":"3"
              },
              {
                "name":"MAXIMA",
                "level":"3"
              },
              {
                "name":"Arduino",
                "level":"2"
              },
              {
                "name":"Electronics",
                "level":"2"
              },
              {
                "name":"RaspberryPI",
                "level":"1"
              }
            ]
          },
          {
            "title":"O.S. Administration",
            "elements":[
              {
                "name":"Linux",
                "level":"5"
              },
              {
                "name":"Windows",
                "level":"5"
              },
              {
                "name":"Mac",
                "level":"4"
              },
              {
                "name":"Bash scripting",
                "level":"2"
              }
            ]
          }
        ],
        [
          {
            "title":"Persistence",
            "elements":[
              {
                "name":"Oracle",
                "level":"5"
              },
              {
                "name":"DB2",
                "level":"5"
              },
              {
                "name":"SQL Server",
                "level":"4"
              },
              {
                "name":"JPA/Hibernate",
                "level":"4"
              },
              {
                "name":"JDBC ",
                "level":"4"
              },
              {
                "name":"MongoDB",
                "level":"2"
              }
            ]
          },
          {
            "title":"Frameworks and tools",
            "elements":[
              {
                "name":"Unit testing",
                "level":"5"
              },
              {
                "name":"Google Guice",
                "level":"4"
              },
              {
                "name":"Bootstrap",
                "level":"4"
              },
              {
                "name":"Jenkins/Hudson",
                "level":"4"
              },
              {
                "name":"Struts",
                "level":"3"
              },
              {
                "name":"Spring",
                "level":"3"
              },
              {
                "name":"Joomla!",
                "level":"3"
              },
              {
                "name":"Express",
                "level":"2"
              }
            ]
          },
          {
            "title":"Version Conrol",
            "elements":[
              {
                "name":"Mercurial",
                "level":"5"
              },
              {
                "name":"Git",
                "level":"5"
              },
              {
                "name":"Subversion",
                "level":"4"
              },
              {
                "name":"Clear Case",
                "level":"4"
              }
            ]
          }
        ]
      ]
    };
}
