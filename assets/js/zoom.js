$(document).ready(function() {
    mediumZoom('[data-zoomable]', {
        margin: 100,
        background: getComputedStyle(document.documentElement)
            .getPropertyValue('--global-bg-color') + 'ee',
    })
});
