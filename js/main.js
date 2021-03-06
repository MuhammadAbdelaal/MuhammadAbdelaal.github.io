/**
 * My Works Data/start
 */

const projects = [
    {
        type: 'backend',
        name: 'Weather API Udacity',
        imagURl: 'img/works/4.jpg',
        desc: 'Weather API is the second project in udicity nanodegree program using Async JavaScript to fetch data from Weather API',
        githubUrl: 'https://github.com/MuhammadAbdelaal/WeatherAPIUdacity2ndProject',
        url: 'https://github.com/MuhammadAbdelaal/WeatherAPIUdacity2ndProject',
    },
    {
        
        type: 'frontend',
        name: 'Landing Page Udacity',
        imagURl: 'img/works/5.jpg',
        desc: 'Landing Page Project, 1st project in Udaciyt Nanodegree Program',
        githubUrl: 'https://github.com/MuhammadAbdelaal/landingPageUdacity1stProject',
        url: 'https://muhammadabdelaal.github.io/landingPageUdacity1stProject/',
    },
    {
        type: 'frontend',
        name: 'The GiftsShop',
        imagURl: 'img/works/3.jpg',
        desc: 'Angular8, Sass (still under development)',
        githubUrl: 'https://github.com/MuhammadAbdelaal/theGiftsShop',
        url: 'https://muhammadabdelaal.github.io/theGiftsShop-Production/',
    },
    {
        type: 'frontend',
        name: 'My Portfolio (This Website)',
        imagURl: 'img/works/1.jpg',
        desc: 'Fully Responsive using Bootstrap4, jQuery, CSS3, and JavaScript',
        githubUrl: 'https://github.com/MuhammadAbdelaal/MuhammadAbdelaal.github.io',
        url: 'https://muhammadabdelaal.github.io',
    },
    {
        type: 'frontend',
        name: 'Coffe Shop',
        imagURl: 'img/works/2.jpg',
        desc: 'Responsive Design, Object-Oriented JavaScript, HTML5, and CSS3',
        githubUrl: 'https://github.com/MuhammadAbdelaal/CoffeeShopProject',
        url: 'https://muhammadabdelaal.github.io/CoffeeShopProject/',
    },
    {
        type: 'fullstack',
        name: 'Task Tracking App',
        imagURl: 'img/works/4.jpg',
        desc: 'Application to track tasks (still under development) BootStrap, JavaScript, PHP, and mySql',
        githubUrl: 'https://github.com/MuhammadAbdelaal/Task_Tracker',
        url: 'https://github.com/MuhammadAbdelaal/Task_Tracker',
    },
    {
        type: 'frontend',
        name: 'Portfolio Template',
        imagURl: 'img/works/6.jpg',
        desc: 'Fully responsive design, with pure HTML5 and CSS3',
        githubUrl: 'https://github.com/MuhammadAbdelaal/Portfolio-template',
        url: 'https://muhammadabdelaal.github.io/Portfolio-template/',
    },
    {
        type: 'frontend',
        name: 'Maths Games',
        imagURl: 'img/works/5.jpg',
        desc: 'Maths games webpage made with pure JavaScript, HTML, and CSS',
        githubUrl: 'https://github.com/MuhammadAbdelaal/MathsGames',
        url: 'https://muhammadabdelaal.github.io/MathsGames/',
    },

]

/**
 * My Works Data/end
 */


/**
 * ############################################################################ 
 * ############################# Navbar Start #################################
 */
$('nav li').data('clicked', false);

var mq = window.matchMedia("(min-width: 700px)");
if (mq.matches) { // only if screen is larger than @768px
    $(window).scroll(function () { //on scroll change navbar background color and nav links colors
        let scroll = $(window).scrollTop();
        let sections = $('section');
        let sectionsArray = Array.from(sections);
        let id;

        for (let i = 0; i < sectionsArray.length; i++) {
            id = sectionsArray[i].id;
            /**
             * when reach top offset of about section
             * change navbar background to dark
             * else change navbar background to transparent
             */
            if (scroll > ($(`#${sectionsArray[1].id}`).offset().top) - 50) {
                $('nav').css('backgroundColor', '#000');
            } else {
                $('nav').css('backgroundColor', 'transparent');
            }



            /**
             * when reach top offset of any section
             * if scroll exceeded it
             * add active class to the nav link corrosponding to that section
             * and remove the same class from its siblings
             */
            if (scroll > ($(`#${id}`).offset().top) - 250) {

                if ($('nav li').data('clicked') == false) { // ensure that this scroll not driven by clicking a nav item
                    $(`nav a[href='#${id}']`).parent().addClass('active');
                    $(`nav a[href='#${id}']`).parent().siblings().removeClass('active');
                }
            }

        }
    });
} else { // hide the collapsable nav menu on clicking any nav item because its mobile mode now
    $('nav li').click(function () {  
        $('.navbar-collapse').collapse('hide');
    });
}


$('nav a').click(function () { // on clicking any nav link

    activeLink(this); // add active class to the click nav item and remove the same class from its siblings
    animateScroll(this); //scroll to its corrosponding section with animation

    $('nav li').data('clicked', true); // set date clicked to true so not add active class on scroll
    setTimeout(function () { // then after 0.5 second make date clicked to flase again to work with scroll
        $('nav li').data('clicked', false);
    }, 500);
});

function animateScroll(element) {
    let aHref = $(element).attr("href");
    let offset = ($(aHref).offset().top - 15);
    $('body, html').animate({ scrollTop: offset }, 600);
}
function activeLink(element) {
    $(element).parent().addClass('active');
    $(element).parent().siblings().removeClass('active');
}

/**
 * ########################### End of Navbar ##################################
 * ############################################################################
 */




/**
 * ################################################################################
 * ############################# Typewriter  Start ################################
 */
const word = document.getElementById('word');
const word2 = document.getElementById('word2');

let typewriter = new Typewriter(word, {
    loop: true
});

let typewriter2 = new Typewriter(word2, {
    loop: true
});

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
/**
* ########################### End of Typewriter  ############################
* ################################################################################
*/




/**
 * ################################################################################
 * ############################# Works Section Start ###########################
*/
fillAllWorksRow($('#all-works')); //all works
fillWorksRows($('#frontend-works'), 'frontend'); //frontend
fillWorksRows($('#backend-works'), 'backend'); //backend
fillWorksRows($('#fullstack-works'), 'fullstack'); //fullstack


function fillWorksRows(row, type) { //to fill different works rows inside works section
    shuffle(projects);
    let temp = ``;
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].type == type) {
            temp += `<div class="col-lg-4 col-md-6 col-sm-12">
            <div class="work-item">
                <img class="img-fluid" src='${projects[i].imagURl}' alt="1">
                <div class="caption">
                    <div class="font-weight-bold">${projects[i].name}</div>
                    <p>${projects[i].desc}</p>
                    <a class="mx-2 px-2 text-decoration-none text-dark"
                        href='${projects[i].githubUrl}' target="blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="mx-2 px-2 text-decoration-none text-danger"
                        href='${projects[i].url}' target="blank">
                        <i class="fas fa-link icon"></i>
                    </a>
                </div>
            </div>
        </div>`
        }
    }

    row.html(temp);
}

function fillAllWorksRow(row) { //to fill all works rows inside works section
    let temp = ``;
    for (let i = 0; i < projects.length; i++) {
        temp += `<div class="col-lg-4 col-md-6 col-sm-12">
            <div class="work-item">
                <img class="img-fluid" src='${projects[i].imagURl}' alt="1">
                <div class="caption">
                    <div class="font-weight-bold">${projects[i].name}</div>
                    <p>${projects[i].desc}</p>
                    <a class="mx-2 px-2 text-decoration-none text-dark"
                        href='${projects[i].githubUrl}' target="blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="mx-2 px-2 text-decoration-none text-danger"
                        href='${projects[i].url}' target="blank">
                        <i class="fas fa-link icon"></i>
                    </a>
                </div>
            </div>
        </div>`
    }

    row.html(temp);
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 */
function shuffle(array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

/**
* ########################### Works Section End ############################
* ################################################################################
*/



