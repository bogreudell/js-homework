var http = require('http'),
	fs = require('fs')

var languages = [
	{
		name: 'aragonese',
		nativeName: 'fabla',
		status: 'recognized',
		distribution: 'aragon',
		populationL1: 10000,
		populationL2: 20000
	},
	{
		name: 'aranese',
		nativeName: 'aranès',
		status: 'regionally official',
		distribution: 'catalonia',
		populationL1: 5000,
		populationL2: 'None - insufficient data'
	},
	{
		name: 'asturian',
		nativeName: 'asturianu',
		status: 'unrecognized',
		distribution: 'asturias',
		populationL1: 110000,
		populationL2: 450000
	},
	{
		name: 'basque',
		nativeName: 'euskera',
		status: 'regionally official',
		distribution: 'basque country'
		populationL1: 715000,
		populationL2: 'None - insufficient data'

	},
	{
		name: 'catalan',
		nativeName: 'català',
		status: 'regionally official',
		distribution: 'catalonia, valencia, balearic islands',
		populationL1: 11500000,
		populationL2: 500000
	},
	{
		name: 'extremaduran',
		nativeName: 'estremeñu',
		status: 'unrecognized',
		distribution: 'extremaduran',
		populationL1: 200000
		populationL2: 'None - insufficient data'
	},
	{
		name: 'galician',
		nativeName: 'galego',
		status: 'regionally official',
		distribution: 'galicia',
		populationL1: 3200000,
		populationL2: 'None - insufficient data'
	},
	{
		name: 'spanish',
		nativeName: 'español',
		status: 'nationally official',
		distribution: 'nationwide',
		populationL1: 407000000,
		populationL2: 6000000032
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