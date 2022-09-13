var slideOrder = 0;

var slidePause = 8000;

var slides = $(".card-decks .card-deck");

$(document).ready(function(){
	nextSlide(slideOrder)
})

function autoSlide(){
	autoSlideTimeout = setTimeout(function() {
		

		if(slides.length <= slideOrder){
			slideOrder = 0;
		}

		nextSlide(slideOrder);
		
		
		slideOrder++;
	}, slidePause);
}

function theDelay(index){
	var delay = (0.2 * index)
	var delayClass = parseInt(delay.toString().replace(".", ""));
	
	return "0" + delayClass
}

function nextSlide(deck){
	var currentDeck = slides.closest(".deck-active")
	var currentCards = currentDeck.find(".card");
	
	var nextDeck = slides.eq(deck);
	
	currentCards.each(function(index){
		var delay = theDelay(index);
		var card =$(this)
		card.removeClass().attr('class', 'card');

		
		
		card.addClass("animated flipOutY fast delay-" + delay + "s");
		setTimeout(function(){
			card.find(".card-img-overlay").fadeOut();
			card.find(".card-img").removeAttr('style');
		}, ((delay + 8) * 50))
		
		
	});
	
	var timeout = ((1 * (currentCards.length - 1)) * 1000)
	
	setTimeout(function(){
		if(nextDeck.length){
	
			currentDeck.removeClass("deck-active");
			currentDeck.find(".card").each(function(){
				$(this).removeClass().attr('class', 'card');
			})

			nextDeck.find(".card").each(function(index){
				var delay = theDelay(index);
				
				var card = $(this);
				setTimeout(function(){
					card.find(".card-img-overlay").stop().fadeIn();
					card.find(".card-img").animate({height: '110%', width: '110%'}, {duration:(slidePause / 2), easing: 'swing', queue: false });
			
				}, ((delay + 8) * 10))
				card.addClass("animated flipInY fast delay-" + delay + "s");	
			})
			nextDeck.addClass("deck-active");
			autoSlide();
		}else{
			console.error("Card flipper, did not find the target deck. Did you remove it?")
			slideOrder = 0;
			autoSlide();
		}
		
	}, timeout)
}