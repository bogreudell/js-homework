var http = require('http'),
	fs   = require('fs')

/*var posts = [ 
	{
		title: 'hello'
	}
]*/

var routes = {

	character: function (name) {
		var data = {
			name: 'You gave me: ' + name
		}

		return data

	},

	cities: function (name) {
		return {
			hello: 'cities'
		}
	}

}


var server = http.createServer(function (request, response) {

	
	var secondSlashIndex = request.url.indexOf('/', 1)
	
	if (secondSlashIndex === -1) {
		response.end('404')
	} else {
		var route = request.url.slice(1, secondSlashIndex)

		var parameter = request.url.slice(secondSlashIndex +1)

		if (routes[route]) {
			var data = routes[route](parameter)
			response.end(JSON.stringify(data))
		} else {
			response.end('404')
		}
		//response.end(route + ':' + 'parameter')
	}

	//response.end(route)

	//response.end('123')

	//if (request.url === '/') {
		/*fs.readFile('./index.html', 'utf-8', function (err, file) {
			
			file = file.replace('{{whatever}}', request.url)

			response.end(file)

		})
			/*console.log(file)
			response.end(file)
		})
	} else if (request.url === '/posts') {
		response.end(JSON.stringify(posts))
	} else if (request.url === '/users') {
		response.end('users')
	} else {
		response.end('404')
	}*/

})

server.listen(8080)

//console.log([])