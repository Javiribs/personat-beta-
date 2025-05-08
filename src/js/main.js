(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }

        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    // --- Add this code for Active Navigation Link ---
    $(document).ready(function () {
        // Get all the nav links and sections
        const navLinks = $('.navbar-nav .nav-link');
        const sections = [
            { id: 'carousel-section', selector: '#header-carousel' },
            { id: 'formularios-section', selector: '#formularios-section' },
            { id: 'serveis-section', selector: '#serveis-section' },
            { id: 'empremta-section', selector: '#empremta-section' },
            { id: 'nosaltres-section', selector: '#nosaltres-section' }
        ];

        // Get the height of the navbar to offset the scroll position
        const navbarHeight = $('#second-barnav').outerHeight();

        // Function to check which section is currently in view
        function checkActiveSection() {
            let currentSection = "";

            sections.forEach(section => {
                const sectionElement = $(section.selector);
                if (sectionElement.length) { // Check if the element exists
                    const sectionTop = sectionElement.offset().top - navbarHeight;
                    const sectionBottom = sectionTop + sectionElement.outerHeight();

                    if ($(window).scrollTop() >= sectionTop && $(window).scrollTop() < sectionBottom) {
                        currentSection = section.id;
                    }
                }
            });

            // Remove the 'active' class and reset color from all nav links
            navLinks.removeClass('active').css('color', '');

            // Add the 'active' class and set color to black ONLY to the CURRENTLY active nav link
            navLinks.each(function () {
                const href = $(this).attr('href').substring(1); // Remove the '#'
                if (href === currentSection && currentSection !== "") { // Added check for empty currentSection
                    $(this).addClass('active').css('color', 'black');
                }
            });
        }

        // Initial check on page load and on scroll
        checkActiveSection();
        $(window).on('scroll', checkActiveSection);

        // Smooth scrolling when clicking on a nav link
        navLinks.on('click', function (e) {
            e.preventDefault();

            const target = $(this).attr('href');
            const targetElement = $(target);

            if (targetElement.length) {
                $('html, body').animate({
                    scrollTop: targetElement.offset().top - navbarHeight
                }, 800);
            }
        });
    });
    // --- End of Added Code ---

})(jQuery);

