const contents = [
    {
        "content_name": "Career <strong>Summary</strong>",
        "content_desc": "My work experience before became a freelancer.",
        "content_list": [
            {
                "name": "Web Developer Internship",
                "company": "PT. Alfasoft",
                "location": "Malang, Indonesia",
                "time_work": "Sep 2014 - Sep 2015",
                "description": [
                    "Working on several application projects such as web content aggregator and web comparison.",
                    "Search Engine Optimization (SEO) and Quality Improvement.",
                    "Create design and article for company."
                ],
            },
            {
                "name": "Web Developer",
                "company": "PT. Universal Big Data",
                "location": "Malang, Indonesia",
                "time_work": "Nov 2016 - Feb 2019",
                "description": [
                    "Work as a Web Developer working on several internal company projects.",
                    "Create an Application Programming Interface (API) and Design database.",
                    "Participate in the entire application lifecycle, focus on coding and debugging."
                ],
            },
            {
                "name": "Web Developer & Support",
                "company": "PT. Indonesian Cloud",
                "location": "Jakarta, Indonesia",
                "time_work": "Feb 2019 - Des 2020",
                "description": [
                    "Maintenance and Monitor BTN Properti system to keep it running normally.",
                    "Help solve/repair if there are problems with the BTN Properti System (especially Backend).",
                    "Help users if there are questions or problems related to the system."
                ],
            },
            {
                "name": "Intermediate Backend Developer",
                "company": "PT. Glovory Technologies",
                "location": "Malang, Indonesia",
                "time_work": "Apr 2021 - Apr 2022",
                "description": [
                    "Designed and developed RESTful APIs using Node.js and NestJS.",
                    "Create easy-to-use APIs to be consumed by the frontend team using Postman as its documentation.",
                    "Collaborate with project manager, system analyst and team about requirements and envision system features and functionality."
                ],
            },
            {
                "name": "Backend (Node.JS) Engineer Junior",
                "company": "PT. Glovory Technologies",
                "location": "Malang, Indonesia",
                "time_work": "Apr 2022 - Jan 2023",
                "description": [
                    "Designed and developed RESTful APIs using Node.js and NestJS.",
                    "Collaborated with a team of developers to implement new features and functionality.",
                    "Conducted code reviews and provided feedback to team members.",
                    "Join with R&D Team to research application requirements and technologies."
                ],
            },
        ]
    }
];

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(contents));
}