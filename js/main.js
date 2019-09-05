
/**
 * ############################# Navbar logic #################################
 * ############################################################################
 */
$('nav li').data('clicked', false);
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
        if (scroll > ($(`#${sectionsArray[1].id}`).offset().top)-50) { 
            $('nav').css('backgroundColor', '#343A40'); 
        } else {
            $('nav').css('backgroundColor', 'transparent');
        }

        /**
         * when reach top offset of any section
         * if scroll exceeded it
         * add active class to the nav link corrosponding to that section
         * and remove the same class from its siblings
         */
        if (scroll > ($(`#${id}`).offset().top)  - 250) {
            
            if($('nav li').data('clicked') == false) { // ensure that this scroll not driven by clicking a nav item
                $(`nav a[href='#${id}']`).parent().addClass('active');
                $(`nav a[href='#${id}']`).parent().siblings().removeClass('active');              
            }
        }
    
    }
});

$('nav a').click(function(){ // on clicking any nav link
    
    activeLink(this); // add active class to the click nav item and remove the same class from its siblings
    animateScroll(this); //scroll to its corrosponding section with animation
    
    $('nav li').data('clicked', true); // set date clicked to true so not add active class on scroll
    setTimeout(function(){ // then after 0.5 second make date clicked to flase again to work with scroll
        $('nav li').data('clicked', false);
    }, 500);
});

function animateScroll(element) {
    let aHref = $(element).attr("href");
    let offset = ($(aHref).offset().top -15);
    $('body, html').animate({scrollTop: offset}, 600);
}
function activeLink(element) {
    $(element).parent().addClass('active');
    $(element).parent().siblings().removeClass('active');
}
/**
 * ########################### End of Navbar logic ############################
 * ############################################################################
 */



 
/**
 * ############################# Typewriter logic #################################
 * ################################################################################
 */
const word = document.getElementById('word');
const word2 = document.getElementById('word2');

let typewriter = new Typewriter(word, {
    loop: true
});

let typewriter2 = new Typewriter(word2, {
    loop: true
});

typewriter2.typeString('Front-end')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Back-end')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Full-stack')
    .pauseFor(2500)
    .deleteAll()
    .start();

typewriter.typeString('Front-end')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Back-end')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Full-stack')
    .pauseFor(2500)
    .deleteAll()
    .start();

 /**
 * ########################### End of Typewriter logic ############################
 * ################################################################################
 */
