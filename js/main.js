




// change navbar background color when reching about section
$(window).scroll(function () { 

    let scroll = $(window).scrollTop(); // get scrollTop value
    
    if (scroll > ($('#about').offset().top)-20) {// when reach scrollTop of about
        $('nav').css('backgroundColor', '#191919');// change navbar background to dark
    } else {
        $('nav').css('backgroundColor', 'transparent');// else change navbar background to transparent
    }

});

// navbar links animated scroll
$('nav a').click(function(){
    $(this).parent().addClass('active'); //get the clicked nav link and add active class to its parent
    $(this).parent().siblings().removeClass('active'); // remove active class from its parents' sibilins if any
    let aHref = $(this).attr("href"); // get the href of clicked nav link
    let aboutOffset = $(aHref).offset().top; // get the top offset of section corrosponding to the clicked nav link
    $('body, html').animate({scrollTop: aboutOffset}, 1000); // scroll the body moving to that section
});