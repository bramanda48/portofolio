const contents = [
    {
        "content_name": "<strong>Skills &</strong> Tools",
        "content_desc": "<p class='text-muted'>I've spent several time on improving my skills in application development. This is some of skills and tools, i can mastered.</p>",
        "content_list": [
            {
                "name": "PHP",
                "image": "images/skill/php.svg",
            },
            {
                "name": "HTML",
                "image": "images/skill/html.svg",
            },
            {
                "name": "CSS",
                "image": "images/skill/css.svg",
            },
            {
                "name": "Javascript",
                "image": "images/skill/js.svg",
            },
            {
                "name": "TypeScript",
                "image": "images/skill/ts.svg",
            },
            {
                "name": "C#",
                "image": "images/skill/csharp.svg",
            },
            {
                "name": "VB.NET",
                "image": "images/skill/vb.svg",
            },
            {
                "name": ".NET Core",
                "image": "images/skill/netcore.svg",
            },
            {
                "name": "NestJS",
                "image": "images/skill/nestjs.svg",
            },
            {
                "name": "Codeigniter",
                "image": "images/skill/codeigniter.svg",
            },
            {
                "name": "JQuery",
                "image": "images/skill/jquery.svg",
            },
            {
                "name": "Bootstrap",
                "image": "images/skill/bs.svg",
            },
            {
                "name": "MySQL",
                "image": "images/skill/mysql.svg",
            },
            {
                "name": "Redis",
                "image": "images/skill/redis.svg",
            },
            {
                "name": "VS Code",
                "image": "images/skill/vscode.svg",
            },
            {
                "name": "Visual Studio",
                "image": "images/skill/vsstudio.svg",
            },
            {
                "name": "GIT",
                "image": "images/skill/git.svg",
            },
            {
                "name": "Swagger",
                "image": "images/skill/swagger.svg",
            },
        ]
    },
    {
        "content_name": "<strong>Another</strong> Tools",
        "content_desc": "<p class='text-muted'>This application is used in my latest project. But i am an early user and requires a deeper experience.</p>",
        "content_list": [
            {
                "name": "Rabbit MQ",
                "image": "images/skill/rabbitmq.svg",
            },
            {
                "name": "Elasticsearch",
                "image": "images/skill/elasticsearch.svg",
            },
            {
                "name": "Docker",
                "image": "images/skill/docker.svg",
            },
            {
                "name": "Kubernetes",
                "image": "images/skill/kubernets.svg",
            },
        ]
    },
    {
        "content_name": "<strong>Currently</strong> On Learning",
        "content_desc": "<p class='text-muted'>Some of the newest technologies and frameworks that I am learning now.</p>",
        "content_list": [
            {
                "name": "Svelte",
                "image": "images/skill/svelte.svg",
            },
            {
                "name": "Flutter",
                "image": "images/skill/flutter.svg",
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