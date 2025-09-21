// Optional: Add mouseover feedback for nav links (for extra feedback)
document.addEventListener('DOMContentLoaded', function() {
	var navLinks = document.querySelectorAll('.nav-link');
	navLinks.forEach(function(link) {
		link.addEventListener('mouseover', function() {
			this.classList.add('hovered');
		});
		link.addEventListener('mouseout', function() {
			this.classList.remove('hovered');
		});
	});
});
