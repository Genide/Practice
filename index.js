var https = require('https');
var fs = require('fs');

var google = 'https://www.google.com';
var yahoo = 'https://www.yahoo.com';

var getWebsite = function (website, callback) {
	https.get(website, function (res) {
		var site = "";

		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			site += chunk;
		});

		res.on('end', function () {
			callback(site);
		});
	});
};

var saveToFile = function (filename) {
	return function (site) {
		fs.writeFileSync(filename, site);
	};
};

getWebsite(google, saveToFile('text.txt'));
