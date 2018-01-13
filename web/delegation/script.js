/**
 * Notes:
 * - DOMContentLoaded is not supported on IE8
 * - Using anonymous functions for brevity
 */

document.addEventListener('DOMContentLoaded', function() {
	document
		.getElementById('items-list')
		.addEventListener('click', function(event) {
			const target = event.target;

			if (target.tagName == 'A') {
				event.preventDefault();
				alert(target.text);
			}
		});
});
