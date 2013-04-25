var express = require('express'),
    app = express()

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
        distribution: 'basque country',
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
        populationL1: 200000,
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

app.get('/', function (req, res) {
    res.send(
        '<div style="position:fixed; top:0; left:0; width:100%; height:100%; background:#f1f1f1; text-align:center; font-family:georgia; color:#333; text-shadow:0px 1px 0px #fff">' +
        '<h2 style="margin:25px 0px;">Languages of Spain</h2>' +
        '<p style="margin:0px; font-size:14pt;">' +
        'For data on Spain\'s eight native languages, <a style="color:#333;" href="http://localhost:8888/languages">click here</a>,' + 
        '<br />or enter \'<span style="font-family:helvetica">http://localhost:8888/languages</span>\' in your browser window.' +
        '</div>'
        )
})

app.get('/languages', function (req, res) {
    
    var callback = req.query.callback,
        aragonese = req.query.aragonese

    var returnArray = []

    data.forEach(function (language){
        var qualified = true

        if (aragonese !== language.aragonese) {
            qualified = false
        }
    })

    if (qualified) {
        returnArray.push(person)
    }

})

app.listen(8888)

console.log('This shit is up and running.')