// TODO: Use callbacks in getting a webpage.
var https = require('https');

var google = "www.google.com";
var epic = "www.epic.com";
var yahoo = "www.yahoo.com";
var duckduckgo = "duckduckgo.com"

var printSite = function (hostname, callback) {
	var site = "";
	var options = {
		// protocol: "https:",
		'hostname': hostname
	};
	var req = https.request(options, (res) => {
		res.on('data', (chunk) => {
			site += chunk;
		}).on ('end', () => {
			callback(site);
		});
	}).on ('error', (err) => {
		console.log(err);
	});

	req.end();
};

printSite(duckduckgo, (site) => console.log(site));
