;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_dotdotdot_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*
 *	jQuery dotdotdot 3.0.5
 *	@requires jQuery 1.7.0 or later
 *
 *	dotdotdot.frebsite.nl
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	License: CC-BY-NC-4.0
 *	http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(t){"use strict";function e(){o=t(window),i={},s={},r={},t.each([i,s,r],function(t,e){e.add=function(t){t=t.split(" ");for(var n=0,i=t.length;n<i;n++)e[t[n]]=e.ddd(t[n])}}),i.ddd=function(t){return"ddd-"+t},i.add("truncated keep text"),s.ddd=function(t){return"ddd-"+t},s.add("text"),r.ddd=function(t){return t+".ddd"},r.add("resize"),e=function(){}}var n="dotdotdot";if(!(t[n]&&t[n].version>"3.0.5")){t[n]=function(t,e){this.$dot=t,this.api=["getInstance","truncate","restore","destroy","watch","unwatch"],this.opts=e;var i=this.$dot.data(n);return i&&i.destroy(),this.init(),this.truncate(),this.opts.watch&&this.watch(),this},t[n].version="3.0.5",t[n].uniqueId=0,t[n].defaults={ellipsis:"… ",truncate:"word",tolerance:0,keep:null,watch:"window"},t[n].prototype={init:function(){this.watchTimeout=null,this.watchInterval=null,this.uniqueId=t[n].uniqueId++,this.originalContent=this.$dot.contents(),this.originalStyle=this.$dot.attr("style")||"",this.maxHeight=this._getMaxHeight()+this.opts.tolerance,"break-word"!==this.$dot.css("word-wrap")&&this.$dot.css("word-wrap","break-word"),"nowrap"===this.$dot.css("white-space")&&this.$dot.css("white-space","normal")},getInstance:function(){return this},truncate:function(){var e=this;this.$inner=this.$dot.wrapInner("<div />").children().css({display:"block",height:"auto",width:"auto",border:"none",padding:0,margin:0}),this.$inner.contents().detach().end().append(this.originalContent.clone(!0)),this.$inner.find("script, style").addClass(i.keep),this.opts.keep&&this.$inner.find(this.opts.keep).addClass(i.keep),this.$inner.find("*").not("."+i.keep).add(this.$inner).contents().each(function(){var n=this,s=t(this);if(3==n.nodeType){if(s.prev().is("table, thead, tfoot, tr, th, td, dl, dt, dd, ul, ol, li, video"))return void s.remove();if(s.parent().contents().length>1){var r=t('<span class="'+i.text+'">'+e.__getTextContent(n)+"</span>").css({display:"inline",height:"auto",width:"auto",border:"none",padding:0,margin:0});s.replaceWith(r)}}else 8==n.nodeType&&s.remove()});var n=this._truncateNode(this.$dot);return this.$dot[n?"addClass":"removeClass"](i.truncated),this.$inner.find("."+i.text).each(function(){t(this).replaceWith(t(this).contents())}),this.$inner.find("."+i.keep).removeClass(i.keep),this.$inner.replaceWith(this.$inner.contents()),this.$inner=null,n},restore:function(){this.unwatch(),this.$dot.contents().detach().end().append(this.originalContent).attr("style",this.originalStyle).removeClass(i.truncated)},destroy:function(){this.restore(),this.$dot.data(n,null)},watch:function(){var t=this;this.unwatch();var e={};"window"==this.opts.watch?o.on(r.resize+t.uniqueId,function(n){t.watchTimeout&&clearTimeout(t.watchTimeout),t.watchTimeout=setTimeout(function(){e=t._watchSizes(e,o,"width","height")},100)}):this.watchInterval=setInterval(function(){e=t._watchSizes(e,t.$dot,"innerWidth","innerHeight")},500)},unwatch:function(){o.off(r.resize+this.uniqueId),this.watchInterval&&clearInterval(this.watchInterval),this.watchTimeout&&clearTimeout(this.watchTimeout)},_api:function(){var e=this,n={};return t.each(this.api,function(t){var i=this;n[i]=function(){var t=e[i].apply(e,arguments);return void 0===t?n:t}}),n},_truncateNode:function(e){var n=this,s=!1,r=!1;return t(e.children().get().reverse()).not("."+i.keep).each(function(){var e=(t(this).contents()[0],t(this));if(!s&&!e.hasClass(i.keep)){if(e.children().length)s=n._truncateNode(e);else if(!n._fits()||r){var o=t("<span>").css("display","none");if(e.replaceWith(o),e.detach(),n._fits()){if("node"==n.opts.truncate)return!0;o.replaceWith(e),s=n._truncateWord(e),s||(r=!0,e.detach())}else o.remove()}e.contents().length||e.remove()}}),s},_truncateWord:function(t){var e=t.contents()[0];if(!e)return!1;for(var n=this,i=this.__getTextContent(e),s=-1!==i.indexOf(" ")?" ":"　",r=i.split(s),o="",a=r.length;a>=0;a--){if(o=r.slice(0,a).join(s),0==a)return"letter"==n.opts.truncate&&(n.__setTextContent(e,r.slice(0,a+1).join(s)),n._truncateLetter(e));if(o.length&&(n.__setTextContent(e,n._addEllipsis(o)),n._fits()))return"letter"!=n.opts.truncate||(n.__setTextContent(e,r.slice(0,a+1).join(s)),n._truncateLetter(e))}return!1},_truncateLetter:function(t){for(var e=this,n=this.__getTextContent(t),i=n.split(""),s="",r=i.length;r>=0;r--)if(s=i.slice(0,r).join(""),s.length&&(e.__setTextContent(t,e._addEllipsis(s)),e._fits()))return!0;return!1},_fits:function(){return this.$inner.innerHeight()<=this.maxHeight},_addEllipsis:function(e){for(var n=[" ","　",",",";",".","!","?"];t.inArray(e.slice(-1),n)>-1;)e=e.slice(0,-1);return e+=this.opts.ellipsis},_getMaxHeight:function(){for(var t=["height","maxHeight"],e=0,n=0;n<t.length;n++){var i=window.getComputedStyle(this.$dot[0])[t[n]];"px"==i.slice(-2)&&(i=parseFloat(i),e=e?Math.min(e,i):i)}switch(this.$dot.css("boxSizing")){case"padding-box":case"border-box":for(var t=["paddingTop","paddingBottom"],n=0;n<t.length;n++){var s=window.getComputedStyle(this.$dot[0])[t[n]];"px"==s.slice(-2)&&(e-=parseFloat(s))}}return Math.max(e,0)},_watchSizes:function(t,e,n,i){if(this.$dot.is(":visible")){var s={width:e[n](),height:e[i]()};return t.width==s.width&&t.height==s.height||this.truncate(),s}return t},__getTextContent:function(t){for(var e=["nodeValue","textContent","innerText"],n=0;n<e.length;n++)if("string"==typeof t[e[n]])return t[e[n]];return""},__setTextContent:function(t,e){for(var n=["nodeValue","textContent","innerText"],i=0;i<n.length;i++)t[n[i]]=e}},t.fn[n]=function(i){return e(),i=t.extend(!0,{},t[n].defaults,i),this.each(function(){t(this).data(n,new t[n](t(this),i)._api())})};var i,s,r,o}}(jQuery);
return true;
}));


 
		var userAgent = navigator.userAgent.toLowerCase();
		jQuery.browser = {
			version: (userAgent.match( /.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/ ) || [])[1],
			chrome: /chrome/.test( userAgent ),
			safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
			opera: /opera/.test( userAgent ),
			msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
			mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
		};
		$.each($.browser, function(i, val) {
			// console.log(i + " > " + val); 
		});
 




function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

$.fn.isolatedScroll = function() {
    this.on('mousewheel DOMMouseScroll', function (e) {
        var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail,
            bottomOverflow = this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
            topOverflow = this.scrollTop <= 0;

        if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
            e.preventDefault();
        }
    });
    return this;
};

$(document).ready(function() {
 
	$('.cacheAjax').removeClass('cacheAjax');
	$('body').addClass('siteReady');

	setInterval(function(){
	 $('.cacheAjax').removeClass('cacheAjax');
	}, 500);
                    
	function tailleBgMobile() {	
		var wW = $(window).width(); 
		if ( wW < 960 ) { 
			var wH = window.innerHeight; 
			$('.barba-container').css('height',wH+'px');
		} 
	}
	tailleBgMobile();

	// DETECT SCROLL ?
    function scrollDownFleche() {
		docHeight = $(document).height();
		windowHeight = $(window).height();
		if (docHeight == windowHeight) {
			$('#scrollDown').css('display','none');
		}
    }
    scrollDownFleche();

	// AJUST LIENS COL DROITE
    function hauteurCol() { 
    	var winWidth = window.innerWidth;
	    if ( $('.barba-container:last-child #menuVI').hasClass('actif') && winWidth > 959 ) { 
			docTitre = $('.menuVertical .titreBloc + a').position().top; 
			windowHeight = $(window).height();
			var nbreItem = $('.barba-container:last-child .menuVertical a').length;  
			var calcHauteur = ((windowHeight-docTitre)/nbreItem);
			var size = Math.ceil(calcHauteur) + 'px';
			$('.barba-container:last-child .menuVertical a').css('height',size); 
   		}
   		else if (winWidth <= 959) {
   			$('.menuVertical a').removeAttr('style');
   		}
    }
	hauteurCol();    
 		
 	function pageTeam(time) {	
		if ( $('.barba-container:last-child #hea').hasClass('teamPage') ) { 
			setTimeout(function(args) {
				 $('.barba-container:last-child #hea.teamPage').css('height', '80vh'); 
			}, time);
	    } 
    }
    pageTeam(600);

	function typoEvents() {    
		$('.add_bhntt').each(function(){  
			$(this).find('p').addClass('texteCourant') 
							 .addClass('textJust')
							 .css('padding-bottom', '20px');
		});
	}
	typoEvents();

	function loadEvents() {

	}
	loadEvents();
 
	function mouseEvents() {

	    // SURVOL LIEN MENU
		$('.m').hover(function(){
			$('.barba-container').toggleClass('menuHover');
		});

		// OUVERTURE MENU
		$('.m').click(function(){

			var winWidth = window.innerWidth;
			
			if (winWidth > 959) {  
				if ( $(window).scrollTop() < 125 ) { 
					TweenMax.to(window, 0.25, {scrollTo:{y:'#menuCache', autoKill:false}, ease:Power2.easeOut});

					$('#cacheMenuBlanc').css('top','-100px');
					$('.barba-container').removeClass('scrollUp').removeClass('scrollDown').addClass('scrollTop');
					
					setTimeout(function() {
						$('.barba-container').toggleClass('menuOuvert');
					}, 350);
				}
				else {
					$('.barba-container').toggleClass('menuOuvert');
				}
			}
			else {

				if ( $('.barba-container').scrollTop() < 50 && $('.barba-container').scrollTop() > 0 ) { 
					TweenMax.to('.barba-container', 0.25, {scrollTo:{y:'#menuCache', autoKill:false}, ease:Power2.easeOut});
				
					$('#cacheMenuBlanc').css('display','none'); 
					$('#cacheMenuBlanc').css('background','transparent');

					$('body').addClass('cacheBlanc');

					$('#cacheMenuBlanc').css('top','-100px');
					$('#cacheMenuBlanc').css('animation','none !important');

					$('.barba-container').removeClass('scrollUp').removeClass('scrollDown').addClass('scrollTop');
					
					setTimeout(function() {
						$('.barba-container').toggleClass('menuOuvert');
					}, 350);

					setTimeout(function() {	
						$('#cacheMenuBlanc').css('background','white');
					}, 1500);

				}
				else {
					$('.barba-container').toggleClass('menuOuvert');
				}
			} 

		});

		// REMOVE SCROLLWHEEL MENU/FORM

		$('nav').isolatedScroll();
		$('#formulaire').isolatedScroll();

		// OUVERTURE MENU
		$('.menuVertical h2').click(function(){
			$('.barba-container').toggleClass('colOpen');
		});

		$('.flexHead').click(function(){ 
			$('.barba-container').removeClass('colOpen');
		})

		$('#closeCol').click(function(){ 
			$('.barba-container').removeClass('colOpen');
		})
 
		$('#v').click(function(){ 
			$('.barba-container').removeClass('colOpen');
		})

		// OUVERTURE MENU
		$('.menuVertical a').click(function(){
			$('.menuVertical a').removeClass('active');
			$(this).addClass('active');
		});

		// OUVERTURE JOB
		$('.sendyourcv').click(function(e){ 
			e.preventDefault();
			$('body').addClass('cvOuvert'); 
			$('#formulaire').addClass('formOuvert'); 
			$('.m').fadeOut('slow');
			$('.logoClip').fadeOut('slow');
	        var title = $(this).closest('.jobItem').find('.titreArticle').html(),
	            formTitle = $('#formulaire').find('h2'),
	            inputTitle = $('.job-title').find('input');
	        formTitle.html(title);
	        inputTitle.val(title);
		});

		$('.spontaneous').click(function(e){ 
			e.preventDefault();
			$('body').addClass('cvOuvert'); 
			$('#formulaire').addClass('formOuvert'); 
			$('.m').fadeOut('slow');
			$('.logoClip').fadeOut('slow');
	        var title = "Spontaneous application",
	            formTitle = $('#formulaire').find('h2'),
	            inputTitle = $('.job-title').find('input');
	        formTitle.html(title);
	        inputTitle.val(title);
		});

		$('#close').click(function(e){ 
			e.preventDefault();
			$('body').removeClass('cvOuvert'); 
			$('#formulaire').removeClass('formOuvert'); 
			$('.m').fadeIn('slow');
			$('.logoClip').fadeIn('slow');
		});

		$('.to-shave').dotdotdot();

	    var expendLink = $('p.readmore');
	    expendLink.on('click', function(e) {
	        e.preventDefault();
	        var it = $(this);

	        var excerpt = it.closest('.g').find('.to-shave'),
	            content = it.closest('.g').find('.jb');
  
	        if (it.hasClass('close')) {
	            TweenMax.to(content, 1, { height: 80, onComplete: function(){
	                it.removeClass('close');
	                it.addClass('open');
	                excerpt.show();
	                content.height(0);
	            } });
	        }
	        else {
	            excerpt.hide();

	            TweenMax.set(content, { height: "auto" });
	            TweenMax.from(content, 1, { height: 80, onComplete: function(){
	                it.removeClass('open');
	                it.addClass('close');
	            } });
	        }
	    });
	 
	    $('#close').mouseenter(function() {
	      $(this).addClass("tourne");   
	    });

	    $('body').on("webkitAnimationEnd oanimationend msAnimationEnd animationend", '#close', function(){
	      $(this).removeClass("tourne"); 
	    })

		// FORM EVENTS
	    var labelAnim = $('.labelanim');
	    labelAnim.on('focusin', function() {
	        $(this).addClass('focused');
	        $(this).addClass('written');
	    })
	    .on('focusout', function() {
	        $(this).removeClass('focused');
	        if( !$(this).find('input').val() ) {
	            $(this).removeClass('written');
	        }
	    });

	    var labelAnim = $('.fileInput');
	    labelAnim.on('focusin', function() {
	        // $(this).addClass('focused');
	        // $(this).addClass('fileUp');
	    })
	    .on('focusout', function() {
	        $(this).removeClass('focused');
	        if( !$(this).find('input').val() ) {
	            $(this).removeClass('fileUp');
	        }
	    });

	    // file input
	    var upload = $('.wpcf7-file');
	    upload.on('change', function() {

	        $(this).parent().parent().addClass('focused');
	        $(this).parent().parent().addClass('fileUp');

	        var upVal = $(this).val();
	        label = $(this).closest('.label-input').find('.file-trigger');
	        upVal = upVal.replace(/^C:\\fakepath\\/, ""); 
	        label.html(upVal); 
	    });

	    $('.clearThis').click(function(){ 
 
	    	$(this).parent().children('span').children('input').css("opacity","0.2");

	        champFile = $(this).closest('.label-input').find('.wpcf7-form-control');
	        champFile.val('');

	    	$(this).parent().find('.file-trigger').html('');
	    	$(this).parent().removeClass('fileUp'); 

	    });

	}
	mouseEvents();

	// LECTEUR VIDEO

	function displayVideo() {
		var videoItem0 = $('.barba-container:last-child .videoItem0')
		if(videoItem0.length > 0) {

			videoItem0.addClass('currentPlay');
			var titreValLoad = videoItem0.find('.videoTitre .hidden').html();
			$('.barba-container:last-child #titreVideo').html(titreValLoad);
			var coun = 0;
			$('.barba-container:last-child .videoListItem a').each(function(){ 
				coun++;
			});	 
			if (coun == 1) {
				$('.barba-container:last-child .videoListItem').addClass('hideThis');
			}
		}
	} 
	displayVideo();

	function playlistVideo() {

		// CHARGE PREMIERE VIDEO
		var videoItem0 = $('.barba-container:last-child .videoItem0')
		if(videoItem0.length > 0) {

		 	var imageValLoad = videoItem0.find('img').attr('src'); 
			$('.barba-container:last-child #videoActiveOverlay').find('img').attr('src', imageValLoad).on('load',function(){
				// $(this).show();
				TweenMax.to(this, 0.25, {
					autoAlpha:1,
					ease:Circ.easeout,
				});
			})

		 	var iframeValLoad = videoItem0.find('.iframe-src').data('src');

		 	$('.barba-container:last-child .main-video').append('<iframe id="iframeVideo" src="'+iframeValLoad+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

			$('.videoOverlay').click(function(){ 
				$(this).fadeOut();  
				var lect = $('#iframeVideo').attr('src');
				lect += "&autoplay=1";   
				$('#iframeVideo').attr('src',lect);
			}); 

			// CHANGE VIDEO
			$('.videoListItem a').click(function(e){ 
				e.preventDefault();

				$('#iframeVideo').attr('src',' ');
				$('.videoListItem a').removeClass('currentPlay');
				$(this).addClass('currentPlay');

				$('#videoActiveOverlay').css('display','none');

				var winWidth = window.innerWidth;
	 
 		
				if (winWidth > 959) {  
					var page = $(this).attr('href');  
					var speed = 350;  
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); 

					var titrevalue = $(this).find('.videoTitre .fullTitre').html();
					$('#titreVideo').html(titrevalue);

					var valeurVideoFrame = $(this).find('.iframe-src').data('src');
					valeurVideoFrame += "&autoplay=1"; 			  

					$('#iframeVideo').attr('src',valeurVideoFrame);

				} else {
				 
					TweenMax.to('.barba-container', 0.25, {scrollTo:{y:'#menuCache', autoKill:false}, ease:Power2.easeOut});

					var titrevalue = $(this).find('.videoTitre .fullTitre').html();
					$('#titreVideo').html(titrevalue);

					var valeurVideoFrame = $(this).find('.iframe-src').data('src');
					// valeurVideoFrame += "&autoplay=1"; 			  
 
					$('#iframeVideo').attr('src',valeurVideoFrame);

				}
			}); 

		}

		$('.videoOverlayN').click(function(){ 
			$(this).fadeOut();  
			var lect = $('#iframeVideoN').attr('src');
			lect += "&autoplay=1";   
			$('#iframeVideoN').attr('src',lect);
		}); 

	}
	playlistVideo();


function scrollEvents() {

	// CORRECT VIEWPORT UNIT MOBILE
	function fix_vh() {
		if ($('.barba-container:last-child #hea').hasClass('teamPage')) {
			$('.barba-container:last-child #hea.teamPage').css({ minHeight: (window.innerHeight)*0.8 });
				} else {
			$('.barba-container:last-child #hea').css({ minHeight: window.innerHeight });
		}


		$('.barba-container:last-child #bgvid').css({ minHeight: window.innerHeight });

		if(  window.innerWidth < 960 ) {
			$('.barba-container:last-child #colDroite1.menuVertical').css({ top: window.innerHeight });
			$('.barba-container:last-child #colDroite2.menuVertical').css({ top: window.innerHeight });
		}

	}
	fix_vh();

	$(window).scroll(fix_vh);
	$(window).resize(fix_vh);

    var didScroll,
        lastScrollTop = 0,
        delta = 0; 
    
    $('.barba-container:last-child').on('scroll', throttle(hasScrolled,500));
    $(window).on('scroll', throttle(hasScrolled,500));
 

    $('.barba-container:last-child').scroll(parrallax);
    $(window).scroll(parrallax); 

    function parrallax() {

        var hatEcr = $(window).height(); 
        var larEcr = $(window).width(); 
        var st = $(this).scrollTop();
 		var tot = (hatEcr - st);

		$('#cacheMenuBlanc').css('display','block');
 		$('#f1').css('transform', 'translateY('+(st)+'px)'); 	
 		$('#titreVertical1').css('margin-top',st+'px');
 		$('#menuLink1').css('margin-top',st+'px');
 		$('#logo2').css('margin-top',(st*(-1))+'px'); 

 		$('#cacheMenuDr').css('top', tot + 'px');

		// parralax 
 		if ( st < hatEcr) {
 			$('#bgvid').css('top',(st*(-0.2))+'px');
		}   

 		$('#bgvid.pageTeam').css('margin-top',(st*(-0.5))+'px');	

   		$('#load-more').html('<span>discover more</span>'); 
   		
 		if ( $('.barba-container').hasClass('menuOuvert')) {
 			$('.barba-container').removeClass('menuOuvert');  
		}

    }
 
    function hasScrolled() { 

		$('#cacheMenuBlanc').css('display','block');
 
    	var bbC = $('.barba-container:last-child');
        var st = $(this).scrollTop();

        var hatEcr = $(window).height();  
        var larEcr = $(window).width(); 
 
  		var tot = (hatEcr - st);

		$('body').removeClass('cacheBlanc');

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st < 1) {
        	bbC.addClass('scrollTop'); 
        } else {
        	bbC.removeClass('scrollTop');
        }
 
   
        if (st > lastScrollTop) {
            // Scroll Down
            bbC.removeClass('scrollUp').addClass('scrollDown');
            $('.barba-container').addClass('lettreAct');	
        } else {
            bbC.removeClass('scrollDown').addClass('scrollUp');  
            // Scroll Up
            if (st <= 50) {
            	$('.barba-container').removeClass('lettreAct');
            }
            if (st + $(this).height() < $(document).height()) {
            }
        }

        if (st > 75) {
        	$('.barba-container').removeClass('scrollTop');
        } else {
        	$('.barba-container').addClass('scrollTop');        	
        } 

    	$('.ajax-more').removeClass('byeAjax');

        if (st < lastScrollTop) {
        	$('.barba-container').addClass('scrollUp');  
        } else {    
        	$('.barba-container').removeClass('scrollUp');  	
        }
 
        $('#scrollValue').html(st + "/" + lastScrollTop); 
 
        lastScrollTop = st; 
    } 
 
} 
scrollEvents();


	// RESIZE
	function resizeEvents() {
 		
	    if ( $('menuVI').hasClass('actif') ) {
    		hauteurCol();
    	} 

	}
	//	resizeEvents();

    // BACKGROUND VIDEO
    function homeVid()  {
    	var vid = document.getElementById('videos-src');
    	if(vid) {
			$('body').addClass('fade-video-out');

			// melange le tableau
			function randomInt(mini, maxi) {
			    var nb = mini + (maxi+1-mini)*Math.random();
			    return Math.floor(nb);
			}
			 
			Array.prototype.shuffle = function(n) {
		    	if(!n)
		        	n = this.length;
			    if(n > 1) {
			        var i = randomInt(0, n-1);
			        var tmp = this[i];
			        this[i] = this[n-1];
			        this[n-1] = tmp;
			        this.shuffle(n-1);
		     	}
			}

			// cree tableau
			var videoSrc = $('.videos-src').data('src');
			var playlist = videoSrc.split(', ');


			// mélange le tableau
			playlist.shuffle();     

			// $('#list').prepend(playlist.join());

			var i = 0;

				vid = document.getElementById('bgvidHome');
				// var source = vid.getElementsByTagName('source');
				var source = document.createElement('source');
				vid.appendChild(source);
			    // vid.src = playlist[i];
			    source.setAttribute('type', 'video/mp4');
			    source.setAttribute('src', playlist[i]);
			    vid.play();

				vid2 = document.getElementById('bgvidHome-2');
				// var source = vid.getElementsByTagName('source');
				var source2 = document.createElement('source');
				vid2.appendChild(source2);
			    // vid.src = playlist[i];
			    source2.setAttribute('type', 'video/mp4');
			    source2.setAttribute('src', playlist[i+1]);
			    // vid2.pause();

			$('body').removeClass('fade-video-out').addClass('fade-video-in');
			 
			// fade fin de video
			var u = true;
			$('#bgvidHome').on('timeupdate', function(event) {  
				var timeFromVideoEnd = 2;  
				var current = Math.round(event.target.currentTime);  
				var total = Math.round(event.target.duration /* * 1000 */);  
				var calc = total - current;

				if ( (calc < timeFromVideoEnd) && u == true ) {    

					u = false;

					$(this).addClass('fade-out');

					i++;
				    if (i == playlist.length) {    
			    	i = 0;
				    }
				    if(i == 1) {
				    	vid2.play();
				    }
				    else {
				    	source2.setAttribute('src', playlist[i]);
				 		vid2.load();
			    		vid2.play(); 
				    }

					setTimeout(function() {
						$(this).addClass('zindex');
					}, 1000);
					setTimeout(function() {
						$('#bgvidHome-2').removeClass('fade-out');
					}, 500);


				}
			})
			.on('ended',function(){
				u = true;
			});

			var u2 = true;
			$('#bgvidHome-2').on('timeupdate', function(event) {  

				var timeFromVideoEnd = 2;  
				var current = Math.round(event.target.currentTime);  
				var total = Math.round(event.target.duration /* * 1000 */);  
				var calc = total - current;

				if ( (calc < timeFromVideoEnd) && u2 == true ) {    

					u2 = false;

					$(this).addClass('fade-out');

					i++;
				    if (i == playlist.length) {    
			    	i = 0;
				    }
				    if(i == 1) {
				    	vid.play();
				    }
				    else {
				    	source.setAttribute('src', playlist[i]);
				 		vid.load();
			    		vid.play(); 
				    }

					setTimeout(function() {
						$(this).addClass('zindex');
					}, 1000);
					setTimeout(function() {
						$('#bgvidHome').removeClass('fade-out');
					}, 500);
				}
			}).on('ended',function(){
				u2 = true;
			});

		}
	}
	homeVid();
	// END HOME

    // AJAX LOAD NEWS

    function ajaxMore() {


    var ajaxMore = $('.ajax-more');
    var loaderD = $('#loader-dot');
    function loadNews() {
        var $container = $('.all-news');

        ajaxMore.addClass('loading');
        loaderD.addClass('charge');

        var page = $container.find('.ajax-page:last-child').find('a');

        if(page.length === 0) {
            ajaxMore.addClass('disabled');
            return false;
        }
 
        else {
            var page_link = page.attr('href');
            $.ajax({
                type: "POST",
                url: page_link,
                cache: false,
                success: function (html) {
                	console.log('success');
                    if (html.length > 0) {
                        var el = $(html).find('.all-news > *');
                        $container.append(el);
                    }
                },
                complete: function() {
                    ajaxMore.removeClass('loading');   
    			    loaderD.removeClass('charge'); 

			        var pageT = $container.find('.ajax-page:last-child').find('a');     

			        if(pageT.length === 0) { 
			            ajaxMore.addClass('disabled'); 
			        }
			             
                    // BODY HEIGHT 
                    
                }
            }); 
        }
    }
    $('.ajax-more').on('click',function(e) {
   		$(this).addClass('byeAjax');
        e.preventDefault();
        loadNews();  
    });

}
ajaxMore()

    // END


	// BARBA

	var ajaxOverlay = $('.ajax-overlay');

    Barba.Utils.xhrTimeout = 10000

	Barba.Prefetch.init();

	Barba.Pjax.start();
	Barba.Dispatcher.on('initStateChange', function() {
		if (typeof ga === 'function') {
			ga('send', 'pageview', location.pathname);
		}
	});

	Barba.Dispatcher.on('newPageReady', function() {
		triggerFunctions();
        if(document.getElementById('formulaire')) {
            $.getScript('./hiddenjs.js');
        }
	});
	Barba.Dispatcher.on('transitionCompleted', function() {
		if(Barba.HistoryManager.currentStatus().namespace == 'page-team.php') {
			pageTeam(0);
		}
	});


	Barba.Pjax.getTransition = function() { 
		return transitions;
	};
	var transitions = Barba.BaseTransition.extend({
		start: function() {
			// Promise
			// 	.all([this.newContainerLoading, this.scrollTop()])
			// 	.then(this.finish.bind(this));
			var e = this;
			var winWidth = window.innerWidth;
			var barbaContainer = $('.barba-container');

			barbaContainer.addClass('no-click');

			if (barbaContainer.hasClass('menuOuvert') ) {
			 	barbaContainer.removeClass('menuOuvert');

			 	$('#cacheMenuBlanc').addClass('displayNone'); 
			 	$('#logoHoverMenu').addClass('whiteImportant'); 
			 	$('.barba-container').addClass('menuTrans');
			 	// $('.ajax-overlay').addClass('menuTrans'); 
 
	         	Promise
				.all([e.newContainerLoading, e.scrollTop()])
				.then(e.menuOpen.bind(e));
			} 
			else if (winWidth > 959) {
				if (
					(Barba.HistoryManager.prevStatus().namespace === 'news')
					||(Barba.HistoryManager.prevStatus().namespace === 'about')
					||(Barba.HistoryManager.prevStatus().namespace === 'team')
				) {
					$('#cadreContent').addClass('overlayed');
					         		Promise
					.all([e.newContainerLoading, e.scrollTop()])
					.then(e.finish.bind(e));
				}
				if (Barba.HistoryManager.prevStatus().namespace === 'page-team.php') {
					$('#teamList').addClass('overlayed');
					$('.colGauche').addClass('no-transition');
					TweenMax.to('.colGauche', 0.5, {
						autoAlpha:0,
						ease:Circ.easeout
					});	
						         		Promise
					.all([e.newContainerLoading, e.scrollTop()])
					.then(e.finish.bind(e));
				}
				else if (Barba.HistoryManager.prevStatus().namespace === 'page-services.php') {
					$('.texteTitre, .texteCourant, .bgimg').addClass('no-transition');
					TweenMax.to('.texteTitre', 0.6, {
						autoAlpha:0,
						ease:Circ.easeout,
					});
					TweenMax.to('.texteCourant', 0.6, {
						autoAlpha:0,
						ease:Circ.easeout,
						delay: 0.2
					});	
					TweenMax.to('.serviceDetBox', 0.6, {
						autoAlpha:0,
						ease:Circ.easeout,
						delay: 0.2
					});	
					Promise
					.all([e.newContainerLoading, e.scrollTop()])
					.then(e.finish.bind(e));
					TweenMax.to('.bgimg', 0.8, {
						autoAlpha:0,
						ease:Circ.easeout,
						delay: 0.4
					});
				}
				else {
				// else (Barba.HistoryManager.prevStatus().namespace === 'services' ||Barba.HistoryManager.prevStatus().namespace === 'page-stories.php' || Barba.HistoryManager.prevStatus().namespace === 'page-news.php') {
					$('.colGauche').addClass('no-transition');
					TweenMax.to('.colGauche', 0.5, {
						autoAlpha:0,
						ease:Circ.easeout
					});		
						         		Promise
					.all([e.newContainerLoading, e.scrollTop()])
					.then(e.finish.bind(e));
				}
				// else {
				// 		         		Promise
				// 	.all([e.newContainerLoading, e.scrollTop()])
				// 	.then(e.finish.bind(e));
				// }
        	}
        	else {
        			         		Promise
					.all([e.newContainerLoading, e.scrollTop()])
					.then(e.finish.bind(e));
        	}
		},
	    scrollTop: function() {
	      var deferred = Barba.Utils.deferred();
	      var obj = { y: window.pageYOffset };

	      TweenMax.to(obj, 0.4, {
	        y: 0,
	        onUpdate: function() {
	          if (obj.y === 0) {
	            deferred.resolve();
	          }

	          window.scroll(0, obj.y);
	        },
	        onComplete: function() {
	          deferred.resolve();
	        }
	      });

	      return deferred.promise;
	    },
		menuOpen: function(){
			var _this = this;

			TweenMax.set(_this.newContainer, {
				autoAlpha:0
			});

			ajaxOverlay.addClass('transparent');
	         TweenMax.to(ajaxOverlay,0.8, {
	            autoAlpha:1,
	            ease:Circ.easeout
	        });

	    	TweenMax.to(_this.oldContainer,0.8, {
	    	   autoAlpha:0,
	    	   ease:Circ.easeout,
	    	   onComplete: function() {
	    	   		var winWidth = window.innerWidth;
	    	        if (winWidth < 960) {
            			$('.barba-container').scrollTop(0);
            		}

	    	   		_this.done();

	    	   		$('#cacheMenuBlanc').removeClass('displayNone');
	    	   		//triggerFunctions();

			         TweenMax.to(ajaxOverlay,0.8, {
			            autoAlpha:0,
			            ease:Circ.easeout,
			            onComplete: function() {
			            	ajaxOverlay.removeClass('transparent');

			            }
			        });
	    	   		TweenMax.to(_this.newContainer,0.8, {
	    	   			autoAlpha:1,
	    	   			ease:Circ.easeout,
	    	   		});
				}
			});			
		},
		finish: function() {

			var winWidth = window.innerWidth;

			// console.log('prev:' + Barba.HistoryManager.prevStatus().namespace);
			// console.log('current:' + Barba.HistoryManager.currentStatus().namespace);

			if (winWidth > 959) {
					NewsToNewsTransition(this);
			}
			else {
				regularTransition(this);
			}
		}
	});

	// TRANSITIONS

	function NewsToNewsTransition(e) {
		var _this = e;
		var theNewContainer = _this.newContainer;
		var menu = $(theNewContainer).find('.m');
			if ($('.menuVertical').length >0) {
				menu = $(theNewContainer).find('.menuDr, .m');
			}
		var	logo = $(theNewContainer).find('.logoClip'),
			colGauche = $(theNewContainer).find('.colGauche'),
			colGaAside = colGauche.find('ul.padTopOnSmall'),
			colDr = $(theNewContainer).find('#colDroite2'),
			colMil = $(theNewContainer).find('#colMilieu'),
			colDrInner = colDr.find('>div'),
			colMilInner = colMil.find('>div');

			menu.addClass('no-transition');
			logo.addClass('no-transition');
			colGauche.addClass('no-transition');
			colGaAside.addClass('no-transition');
			colDr.addClass('no-transition');
			colMil.addClass('no-transition');
			colDrInner.addClass('no-transition');
			colMilInner.addClass('no-transition');

		TweenMax.set(theNewContainer, {
			visibility: 'visible',
			yPercent: 100,
			position: 'fixed',
			zIndex: 2000,
			left: 0,
			top: 0,
			right: 0
		});
		TweenMax.set(menu, {
			position: 'fixed',
			yPercent: -100,
			height: '100%'
		});
		TweenMax.set(logo, {
			transform: 'translateY(-100vh)'
		});
		TweenMax.set(colGauche, {
			y:  200,
			autoAlpha:0
		});
		TweenMax.set(colGaAside, {
			y:  100,
		});

		if ($('.menuVertical').length == 0) {
			TweenMax.set(colDr, {
				autoAlpha:0
			});
			TweenMax.set(colDrInner, {
				y: 100,
				autoAlpha:0
			});
		}
		TweenMax.set(colMil, {
			autoAlpha:0
		});

		TweenMax.set(colMilInner, {
			y: 100,
			autoAlpha:0
		});
		// if (Barba.HistoryManager.currentStatus().namespace !== 'team') { 
		// 	if ( $(_this.oldContainer).find('#bgvid').length > 0 ) {
		// 		TweenMax.to('#bgvid', 1, {
		// 			yPercent: -40,
		// 			ease: Power3.easeInOut,
		// 			onComplete: function() {
		// 				TweenMax.set('#bgvid', { clearProps: 'transform' });
		// 			}
		// 		});	
		// 	}
		// }
		// if (Barba.HistoryManager.currentStatus().namespace == 'page-news.php') { 
		// 		TweenMax.set($(theNewContainer).find('#bgvid'), {
		// 			yPercent: -40,
		// 		});
		// 		TweenMax.to($(theNewContainer).find('#bgvid'), 1, {
		// 			yPercent: 0,
		// 			ease: Power3.easeInOut,
		// 			onComplete: function() {
		// 				TweenMax.set('#bgvid', { clearProps: 'transform' });
		// 			}
		// 		});	
		// }

		if ( $(_this.oldContainer).find('#bgvid').length > 0 ) {
			TweenMax.to($(_this.oldContainer).find('#bgvid'), 1, {
				yPercent: -40,
				ease: Power3.easeInOut,
				onComplete: function() {
					TweenMax.set('#bgvid', { clearProps: 'transform' });
				}
			});		
		}
		if ( $(theNewContainer).find('#bgvid').length > 0 ) {
			TweenMax.set($(theNewContainer).find('#bgvid'),{
				yPercent: -40,
			});	
			TweenMax.to($(theNewContainer).find('#bgvid'), 1, {
				yPercent: 0,
				ease: Power3.easeInOut,
				onComplete: function() {
					TweenMax.set('#bgvid', { clearProps: 'transform' });
				}
			});		
		}

		if (Barba.HistoryManager.prevStatus().namespace == 'home-template.php') { 
			TweenMax.to('video', 1, {
				yPercent: -40,
				ease: Power3.easeInOut,
				onComplete: function() {
					TweenMax.set('video', { clearProps: 'transform' });
				}
			});	
		}
		if ($('.menuVertical').length == 0) {
			TweenMax.to(colDr, 1, {
				autoAlpha:1,
				delay:0.65,
				ease: Power3.easeOut,
				onComplete: function() {
					TweenMax.set(colDr, { clearProps: 'all' });
				}
			});
			TweenMax.to(colDrInner, 0.9, {
				y: 0,
				autoAlpha:1,
				delay:0.85,
				ease: Power3.easeOut,
				onComplete: function() {
					TweenMax.set(colDrInner, { clearProps: 'all' });
				}
			});
		}
		TweenMax.to(colMil, 1, {
			autoAlpha:1,
			delay:0.65,
			ease: Power3.easeOut,
			onComplete: function() {
				TweenMax.set(colMil, { clearProps: 'all' });
			}
		});
		TweenMax.to(colMilInner, 0.8, {
			y: 0,
			autoAlpha:1,
			delay:0.95,
			ease: Power3.easeOut,
			onComplete: function() {
				TweenMax.set(colMilInner, { clearProps: 'all' });
			}
		});	
		TweenMax.to(menu, 1, {
			yPercent: 0,
			ease: Power3.easeInOut,
			onComplete: function() {
				TweenMax.set(menu, { clearProps: 'all' });
			}
		});
		TweenMax.to(logo, 1, {
			transform: 'translateY(0)',
			ease: Power3.easeInOut,
			onComplete: function() {
				TweenMax.set(logo, { clearProps: 'all' });
			}
		});
		TweenMax.to(colGauche, 1, {
			y: 0,
			autoAlpha:1,
			delay:0.75,
			ease: Power3.easeOut,
			onComplete: function() {
				TweenMax.set(colGauche, { clearProps: 'all' });
				playlistVideo();

				$('.no-transition').removeClass('no-transition');
			}
		});
		TweenMax.to(colGaAside, 1, {
			y: 0,
			delay:0.75,
			ease: Power3.easeOut,
		});


		TweenMax.to(_this.newContainer, 1, {
			yPercent: 0,
			ease: Power3.easeInOut,
			onComplete: function() {
				TweenMax.set(_this.newContainer, { clearProps: 'all' });

				_this.done();

                if (Barba.HistoryManager.prevStatus().namespace == 'team' && Barba.HistoryManager.currentStatus().namespace == 'page-team.php') { 
                	// TweenMax.to(window, 0.5, {scrollTo:{y:'#teamList', autoKill:false}, ease:Power2.easeOut});
                }
			}
		});
	}

	// function StoriesToStoryTransition(e) {
	// 	var _this = e;
	// 	var theNewContainer = _this.newContainer;
	// 	var menuDr = $(theNewContainer).find('.menuDr, .m'),
	// 	// storyTostory =>
	// 	// var menuDr = $(theNewContainer).find('.menuDr:not(.otherNews), .m'),
	// 		logo = $(theNewContainer).find('.logoClip'),
	// 		colGauche = $(theNewContainer).find('.colGauche');


	// 	TweenMax.set(_this.newContainer, {
	// 		visibility: 'visible',
	// 		yPercent: 100,
	// 		position: 'fixed',
	// 		zIndex: 2000,
	// 		left: 0,
	// 		top: 0,
	// 		right: 0
	// 	});
	// 	TweenMax.set(menuDr, {
	// 		position: 'fixed',
	// 		yPercent:-100,
	// 		height: '100%'
	// 	});
	// 	TweenMax.set(logo, {
	// 		transform: 'translateY(-100vh)'
	// 	});
	// 	TweenMax.set(colGauche, {
	// 		y: 200,
	// 		autoAlpha:0
	// 	});

	// 	if ( $(_this.oldContainer).find('#bgvid').length > 0 ) {
	// 		TweenMax.to($(_this.oldContainer).find('#bgvid'), 1, {
	// 			yPercent: -40,
	// 			ease: Power3.easeInOut,
	// 			onComplete: function() {
	// 				TweenMax.set('#bgvid', { clearProps: 'transform' });
	// 			}
	// 		});		
	// 	}
	// 	if ( $(theNewContainer).find('#bgvid').length > 0 ) {
	// 		TweenMax.set($(theNewContainer).find('#bgvid'),{
	// 			yPercent: -25,
	// 		});	
	// 		TweenMax.to($(theNewContainer).find('#bgvid'), 1, {
	// 			yPercent: 0,
	// 			ease: Power3.easeInOut,
	// 			onComplete: function() {
	// 				TweenMax.set('#bgvid', { clearProps: 'transform' });
	// 			}
	// 		});		
	// 	}

	// 	TweenMax.to(menuDr, 1, {
	// 		yPercent: 0,
	// 		ease: Power3.easeInOut,
	// 		onComplete: function() {
	// 			TweenMax.set(menuDr, { clearProps: 'all' });
	// 		}
	// 	});
	// 	TweenMax.to(logo, 1, {
	// 		transform: 'translateY(0)',
	// 		ease: Power3.easeInOut,
	// 		onComplete: function() {
	// 			TweenMax.set(logo, { clearProps: 'all' });
	// 		}
	// 	});
	// 	TweenMax.to(colGauche, 1, {
	// 		y: 0,
	// 		autoAlpha:1,
	// 		delay:0.75,
	// 		ease: Power3.easeOut,
	// 		onComplete: function() {
	// 			TweenMax.set(colGauche, { clearProps: 'all' });

	// 			// !!!
	// 			playlistVideo();
	// 		}
	// 	});
	// 	TweenMax.to(_this.newContainer, 1, {
	// 		yPercent: 0,
	// 		ease: Power3.easeInOut,
	// 		onComplete: function() {
	// 			TweenMax.set(_this.newContainer, { clearProps: 'all' });

	// 			_this.done();

	// 		}
	// 	});
	// }

	function regularTransition(e) {
		var _this = e;

        $(_this.newContainer).hide();

         TweenMax.to(ajaxOverlay,0.8, {
            autoAlpha:1,
            ease:Circ.easeout,
            onComplete: function(){

            	var winWidth = window.innerWidth;
            	if (winWidth < 960) {
            		$('.barba-container').scrollTop(0);
            	}

                // RESET SLIDERS
                //TweenMax.to(window, 0.5, {scrollTo:{y:0, autoKill:false}, ease:Power2.easeOut});
                $(_this.oldContainer).hide();
                _this.done();

                $(_this.newContainer).show();

                if (Barba.HistoryManager.prevStatus().namespace == 'team' && Barba.HistoryManager.currentStatus().namespace == 'page-team.php') {    
                	var teamlistPos = $('#teamList').offset().top;
                	$(window).scrollTop(teamlistPos); 
                }
 

                playlistVideo();

                TweenMax.to(ajaxOverlay,0.8, {
                    autoAlpha:0,
                    ease:Circ.easeout,
                });
            }
        }); 
	}

	$(window).resize(function(){	  
		hauteurCol(); 
	});

	// RESET FUNCTIONS

	// function bg() {
	// 	if ( ("#bgvid").hasClass('pageTeam') ) {
	// 		$('#bgvid').css('margin-top': '0');
	// 	}
	// }
	// bg();

	function triggerFunctions() {
		displayVideo(); 
		mouseEvents();
		homeVid();
		scrollDownFleche(); 
		scrollEvents(); 
		tailleBgMobile();
		hauteurCol();
		typoEvents();
        ajaxMore()
        // console.log('hello');
		$('body').removeClass('cvOuvert');  

		// resetTeamPage();

		// bg();
	}

}); 

$(window).on('load', function() {
    $('body').removeClass("preload");
    $('.wrapper').addClass('loaded');
});