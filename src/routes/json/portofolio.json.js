const contents = [
    {
        "content_name": "My <strong>Portofolio</strong>",
        "content_desc": "Several projects, which I have completed.",
        "content_list": [
            {
                "name": "Seakom - Your Vitamin Sea with Seakom <span class='d-block text-muted'>(Back-End API and Database)</span>",
                "image": "images/projects/seakom.jpg",
                "image_alt": "Seakom - Your Vitamin Sea with Seakom",
                "image_background_color": "#61bcca",
                "url": "https://seakom.io",
                "description": "<strong>Seakom</strong> is a mobile application focused on nautical activities and related services.",
                "techstack": [
                    "Directus", "Moyasar", "Traduora", "Budibase", "Javascript"
                ],
            },
            {
                "name": "Shamirest - Shami Restaurant <span class='d-block text-muted'>(Back-End API)</span>",
                "image": "images/projects/shamirest.jpg",
                "image_alt": "Shamirest - Shami Restaurant",
                "image_background_color": "#538736",
                "url": "https://play.google.com/store/apps/details?id=com.shamirest.customer",
                "description": "<strong>Shamirest</strong> is a mobile application to help customer order food in Shami Restaurant.",
                "techstack": [
                    "NestJS", "Kubernetes", "GRPC", "Redis", "PostgreSQL", "Paytab", "Cloudinary"
                ],
            },
            {
                "name": "Himmaty Apps <span class='d-block text-muted'>(Back-End API)</span>",
                "image": "images/projects/himmaty.webp",
                "image_alt": "Himmaty Apps",
                "image_background_color": "#745d98",
                "url": "https://play.google.com/store/apps/details?id=app.himmaty.parent",
                "description": "<strong>Himmaty</strong> is a cloud-based platform that enables Special Education Institutions and childcare centers to manage core operations.",
                "techstack": [
                    "Microservice Orchestration", "NestJS", "Kubernetes", "GRPC", "Redis", "PostgreSQL"
                ],
            },
            {
                "name": "Zeroz - Cloud E-invoicing",
                "image": "images/projects/zeroz.png",
                "image_alt": "Zeroz - Cloud E-invoicing",
                "url": "https://zeroz.io",
                "description": "<strong>Zeroz</strong> is an E-invoicing software compliant with ZATCA, The Saudi Zakat, Tax and Customs Authority regulations.",
                "techstack": [
                    "PHP", "HTML/CSS", "JQuery", "Codeigniter", "MySQL"
                ],
            },
            {
                "name": "BTN Properti Phase #2 <span class='d-block text-muted'>(Back-End API and Database)</span>",
                "image": "images/projects/btnproperti-2.png",
                "image_alt": "BTN Properti Phase #2",
                "url": "https://www.btnproperti.co.id",
                "description": "<strong>BTN PROPERTI</strong> is a portal that contains listings of houses for sale by developers who have collaborated with Bank BTN.",
                "techstack": [
                    "C#", "VB.NET", ".NET Core", "Swagger", "Redis", "RabbitMQ", "Elasticsearch"
                ],
            },
            {
                "name": "EzySchool - Smart Education Solutions Phase #1",
                "image": "images/projects/ezyschool.png" ,
                "image_alt": "EzySchool - Smart Education Solutions Phase #1",
                "url": "https://play.google.com/store/apps/details?id=id.ezyschool.android",
                "description": "<strong>EzySchool</strong> is an application to help school and parents for monitoring their students education in one application.",
                "techstack": [
                    "Hybrid", "Phonegap", "Apache Cordova", "Framework7", "Codeigniter"
                ],
            },
            {
                "name": "e-Filing - Electronic Filing System",
                "image": "images/projects/efiling.png",
                "image_alt": "e-Filing - Electronic Filing System",
                "url": "https://efiling.manda.web.id",
                "description": "<strong>e-Filing</strong> is a system for storing and managing document files digitally.",
                "techstack": [
                    "Codeigniter", "Bootstrap", "JQuery"
                ],
            },
            {
                "name": "BTN Properti Phase #1 <span class='d-block text-muted'>(Mobile Apps)",
                "image": "images/projects/btnproperti-1.png",
                "image_alt": "BTN Properti Phase #1",
                "url": "https://www.btnproperti.co.id",
                "description": "<strong>BTN PROPERTI</strong> is a portal that contains listings of houses for sale by developers who have collaborated with Bank BTN.",
                "techstack": [
                    "Hybrid", "Phonegap", "Apache Cordova", "Framework7"
                ],
            },
            {
                "name": "Radarkerja.com - Membantu Anda Mencari Lowongan Kerja Sesuai Passion",
                "image": "images/projects/radarkerja.png",
                "image_alt": "Radarkerja.com - Membantu Anda Mencari Lowongan Kerja Sesuai Passion",
                "url": "https://radarkerja.manda.web.id",
                "description": "<strong>Radarkerja.com</strong> is a web content aggregator containing listings of job vacancies from popular job sites in Indonesia.",
                "techstack": [
                    "Codeigniter", "Bootstrap", "JQuery"
                ],
            },
            {
                "name": "Rumah6.com - Situs Pembanding Properti No.2 di Indonesia",
                "image": "images/projects/rumah6.jpg",
                "image_alt": "Rumah6.com - Situs Pembanding Properti No.2 di Indonesia",
                "description": "<strong>Rumah6.com</strong> is a portal to help you find ideal property in the market and compare prices from hundreds of property sites in Indonesia.",
                "techstack": [
                    "Codeigniter", "Bootstrap", "JQuery"
                ],
            },
            {
                "name": "MandaWeb - My Personal Website or Portofolio Site",
                "image": "images/projects/mandaweb.png",
                "image_alt": "MandaWeb - My Personal Site",
                "description": "<strong>MandaWeb</strong> is my personal website or portofolio site built with Svelte, Sapper and Bootstrap.",
                "techstack": [
                    "Svelte", "Sapper", "Bootstrap"
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