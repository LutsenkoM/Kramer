$('.portfolio').isotope({
	layoutMode: 'fitRows',
	itemSelector: '.portfolio-block'
});

$('.filter-button-group').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$('.portfolio').isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
	$buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$( this ).addClass('is-checked');
	});
});

