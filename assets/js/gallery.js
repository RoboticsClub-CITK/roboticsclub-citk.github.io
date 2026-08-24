(function () {
    'use strict';

    document.querySelectorAll('.archive-toggle').forEach(function (button) {
        button.addEventListener('click', function () {
            var images = button.nextElementSibling;
            var isExpanded = images.hidden;

            images.hidden = !isExpanded;
            button.setAttribute('aria-expanded', String(isExpanded));
            button.textContent = isExpanded ? 'hide images' : 'show images';
        });
    });

    document.querySelectorAll('.archive-images img').forEach(function (image) {
        image.addEventListener('click', function () {
            image.classList.toggle('is-enlarged');
        });
    });
}());
