var current, 
	size,
	lightbox = document.getElementById('lightbox'),
	thumbnails = document.getElementById('thumbnails'),
	trigger = document.querySelector('.lightboxTrigger'),
	slideshow = document.getElementById('slideshow')

// Zepto

trigger.onclick=function(e){

	// jQuery?
	e.preventDefault()

	var imageHref = this.attributes.getNamedItem('href').nodeValue

	if (lightbox.length > 0) {

		lightbox.style.opacity='0'

	} else {

		var outerLightbox = document.createElement('div'),
			innerLightbox =
				'<div class="nav">' +
				'<a href="#prev" class="prev slide-nav"><img src="images/content/prev.png"></a>' +
				'<span>&nbsp;&nbsp;&nbsp;</span>' +
				'<a href="#next" class="next slide-nav"><img src="images/content/next.png"></a>' +
				'</div>' + 
				'<div id="slideshow">' +
				'<ul></ul>' +
				'<div id="caption">' +
				'This is an image caption, telling the story of this image.' +
				'</div>' +
				'</div>' +      
				'</div>'

		outerLightbox.id = 'lightbox'
		outerLightbox.innerHTML = innerLightbox
		
		document.body.appendChild(outerLightbox)

		


	}

	//document.body.



 
      // fill lightbox with .lightboxTrigger hrefs in #imageSet
      $('#thumbnails').find('.lightboxTrigger').each(function() {
        var $href = $(this).attr('href');
        $('#slideshow ul').append(
          '<li>' +
          '<img class="slide-nav" src="' + $href + '">' +
          '</li>'
        );
      });

}