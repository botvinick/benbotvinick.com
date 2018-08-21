require('particles.js');

$(function () {
	console.log('I love this font so much')
	console.log('It\'s really quite beautiful')
	console.log('If you wanna talk to me email me at one of the following addresses:\n')
	console.log('ben@benbotvinick.com')
	console.log('ben@unlit.io')
	console.log('ben@bough.io')
})

$(document).keydown(function (event) {
	if (event.ctrlKey === true && (event.which === '61' || event.which === '107' || event.which === '173' || event.which === '109' || event.which === '187' || event.which == '189')) {
		event.preventDefault();
	}
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {
	if (event.ctrlKey === true) {
		event.preventDefault();
	}
});

$("body").on('mouseover', 'a', function (e) {
	var link = $(this);
	var href = link.attr('href') || link.data("href");
	var target = link.attr('target');

	link.off('click')
		.on('click', function () {
			if (target === '_blank')
				window.open(href, '_blank');
			else
				window.location.href = href;
		});

	link.attr('data-href', href)
		.css({cursor: 'pointer'})
		.removeAttr('href');
});

$('#fullpage').fullpage();

particlesJS('particles-js', {
	"particles": {
		"number": {
			"value": 80,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 3,
			"direction": "bottom",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
