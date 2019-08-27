jQuery(document).ready(function() {
    jQuery('table').TableJS({
        gap: 70,
        activeColl: 2,
        navDots: true,
        navText: ['<span>Prev</span>', '<span>Next</span>'],
        initResolution: 480
    });
})