var http = require('http'),
	fs = require('fs')

var languages = [
	{
		name: 'aragonese',
		nativeName: 'fabla',
		status: 'recognized',
		distribution: 'aragon'
	},
	{
		name: 'aranese',
		nativeName: 'aranès',
		status: 'regionally official',
		distribution: 'catalonia'
	},
	{
		name: 'asturian',
		nativeName: 'asturianu',
		status: 'unrecognized',
		distribution: 'asturias'
	},
	{
		name: 'basque',
		nativeName: 'euskera',
		status: 'regionally official',
		distribution: 'basque country'
	},
	{
		name: 'catalan',
		nativeName: 'català',
		status: 'regionally official',
		distribution: 'catalonia, valencia, balearic islands'
	},
	{
		name: 'extremaduran',
		nativeName: 'estremeñu',
		status: 'unrecognized',
		distribution: 'extremaduran'
	},
	{
		name: 'galician',
		nativeName: 'galego',
		status: 'regionally official',
		distribution: 'galicia'
	},
	{
		name: 'spanish',
		nativeName: 'español',
		status: 'nationally official',
		distribution: 'nationwide'
	}
]
 
var server = http.createServer(function (request, response) {

	if (request.url === '/') {
		
		fs.readFile('index.html', 'utf-8', function (err, file) {

			var name = languages[0].name,
				nativeName = languages[0].nativeName,
				status = languages[0].status,
				distribution = languages[0].distribution

		    file = file
		    			.replace('{{name}}', name)
		    			.replace('{{nativeName}}', nativeName)
		    			.replace('{{status}}', status)
		    			.replace('{{distribution}}', distribution)

		    response.end(file) 

        })
	
	} else if (request.url === '/languages') {

		response.end(JSON.stringify(languages))

	} else {

		response.end('404')

	}
 
})

server.listen(8888)