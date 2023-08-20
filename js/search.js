	document.addEventListener('DOMContentLoaded', function() {
	  // Get the form and input elements
	  var form = document.querySelector('.form-full-width');
	  var input = form.querySelector('input[name="games"]');
  
	  // Get the gallery images
	  var galleryImages = document.querySelectorAll('.gallery img');
  
	  // Add event listener to the form submission
	  form.addEventListener('submit', function(event) {
		event.preventDefault(); // Prevent form submission
  
		// Get the search query from the input field
		var query = input.value.trim().toLowerCase();
  
		// Perform the search
		if (query !== '') {
		  var matchedImages = [];
		  for (var i = 0; i < galleryImages.length; i++) {
			var alt = galleryImages[i].getAttribute('alt').toLowerCase();
			if (alt.includes(query)) {
			  matchedImages.push(galleryImages[i]);
			}
		  }
  
		  if (matchedImages.length > 0) {
			// Hide all gallery images
			for (var i = 0; i < galleryImages.length; i++) {
			  galleryImages[i].style.display = 'none';
			}
  
			// Show the matched images
			for (var i = 0; i < matchedImages.length; i++) {
			  matchedImages[i].style.display = 'block';
			}
		  } else {
			// Show all gallery images
			for (var i = 0; i < galleryImages.length; i++) {
			  galleryImages[i].style.display = 'block';
			}
		  }
		} else {
		  // Show all gallery images
		  for (var i = 0; i < galleryImages.length; i++) {
			galleryImages[i].style.display = 'block';
		  }
		}
	  });
	});