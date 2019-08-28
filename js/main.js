


$(window).scroll(function () { //on scroll change navbar background color and nav links colors
    let scroll = $(window).scrollTop();
    let sections = $('section');
    let sectionsArray = Array.from(sections);
    let id;
    
    for(let i =0; i < sectionsArray.length; i++) {
        id = sectionsArray[i].id;
        /**
         * when reach top offset of about section
         * change navbar background to dark
         * else change navbar background to transparent
         */
        if (scroll > ($(`#${sectionsArray[1].id}`).offset().top)-20) { 
            $('nav').css('backgroundColor', 'rgba(25, 25, 25, 0.95)'); 
        } else {
            $('nav').css('backgroundColor', 'transparent');
        }

        /**
         * when reach top offset of any section
         * if scroll exceeded it
         * add active class to the nav link corrosponding to that section
         * and remove the same class from its siblings
         */
        if (scroll > $(`#${id}`).offset().top) {
            $(`nav a[href='#${id}']`).parent().addClass('active');
            $(`nav a[href='#${id}']`).parent().siblings().removeClass('active');
        }
    
    }
});

/**
 * on clicking any nav link 
 * scroll to its corrosponding section with animation
 */
$('nav a').click(function(){
    let aHref = $(this).attr("href");
    let offset = ($(aHref).offset().top + 1);
    $('body, html').animate({scrollTop: offset}, 600);
});