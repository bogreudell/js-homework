function buildURL (blogname, apiKey) {
    return 'http://api.tumblr.com/v2/blog/'
        + blogname
        + '.tumblr.com/posts?api_key='
        + apiKey
        + '&callback=?'
}

var key = 'fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4'

var url = buildURL('wikitongues', key)

$(function () {
    $.getJSON(url, function (data) {

        console.log(data)

        createHeader(data.response.blog)
        createPosts(data.response.posts)

    })
})

function createHeader (blog) {
    var title = $(
        '<div id="sidebar">' +
            '<h1>' + 
                '<a href="' + blog.url + '">' + blog.title + '</a>' + 
            '</h1>' +
            '<div>' +
                'Hi Evan, I admit that this an isn\'t artistic API implementation, but both for my thesis midterm critique on Monday and for one of my freelance clients, I need to build a Tumblr blog using Javascript. Therefore, I really wanted to get the hang of that this week and get creative with Flickr (and Instagram!) next week. Oh! And I still did use a bit of css transitions :)' +
            '</div>' +
        '</div>')
    title.appendTo('body')
}

function createPosts (posts) {
    
    posts.forEach(function (post) {

        var postElement = $('<div class="post"></div>')
        postElement.addClass(post.type)

        if (post.type === 'photo') {

            var imgURL = post.photos[0].original_size.url
            var imgOrigin = post.link_url
            var caption = post.caption
            var img = new Image()
            img.src = imgURL
            
            img.onload = function () {                
                
                /*

                For some reason, placing the img variable in an <a></a> doesn't return the image, 
                but rather a link to post.link_url which reads [Object HTMLImageElement]
                
                var postImg = $('<a href="' + imgOrigin + '">' + img + '</a>' )

                */
                
                var postImg = $('<a href="' + imgOrigin + '" target="_blank">' + '<img src="' + imgURL + '">' + '</a>' )
                postElement.append(postImg) 
                postElement.append(caption)
            }

        } else if (post.type === 'video') {

            var embed_code = post.player[2].embed_code

            var vid = $('<div>').html(embed_code)

            postElement.append(vid)
            postElement.append(post.caption)

        } else if (post.type === 'text') {

            postElement.append('<h2>' + post.title + '</h2><p>' + post.slug + '</p>')

        } else if (post.type === 'quote') {

            postElement.append('<h3>"' + post.text + '"</h3>')

        }

        postElement.appendTo('body')

    })
}