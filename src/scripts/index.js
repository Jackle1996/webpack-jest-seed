let techRadar = {
	"Meta": {
	  "generatedAt": new Date()
	},
	"TechRadar": {
	  "Techniques": ["Micro Frontends", "Polyglot programming", "Secrets as a service", "Chaos Engineering"],
	  "Tools": ["Cypress", "Helm", "Traefik", "Humio"],
	  "Platforms": ["Contentful", "AWS Fargate", "InfluxDB"],
	  "Languages & Frameworks": ["TypeScript", "Rust"],
	  "Test-FrameWorks": ["Very", "Dynamic", "Coding"]
  }
};
// header
let header = document.createElement("p"); 
header.innerHTML = techRadar.Meta["generatedAt"];
document.body.append(header);
// list
document.body.append(document.createElement("ul"));
table = document.body.getElementsByTagName("ul")[0];

for (key in techRadar.TechRadar) {
	let title = document.createElement("li");
	title.textContent = key;
	table.append(title);

	let newUl = document.createElement("ul");
	table.append(newUl);

	for (attr in techRadar.TechRadar[key]) {
		let newLi = document.createElement("li");
		newLi.textContent = techRadar.TechRadar[key][attr];
		newUl.append(newLi);
	}
};
