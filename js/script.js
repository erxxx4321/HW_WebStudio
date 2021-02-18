/* intro fadeIn */

$('#intro01').animate({'opacity': '1'},800);
$('#intro02').delay(300).animate({'opacity': '1'},800);
$('#intro03').delay(700).animate({'marginTop': '+=-80px','opacity': '1'},800);

/* toggle modal */

const modal = document.querySelector(".modal");
const btn = document.querySelector(".intro-btn");
const close = document.querySelector(".close");

btn.onclick = function() {
    modal.style.display = "block";
}

function clearModal(){
    modal.style.display = "none";
}

close.onclick = function(){
    clearModal();
}

modal.onclick = function(){
    clearModal();
}


/* toggle burger menu */

$('.burger').click(function() {
$(this).siblings('.menu').slideToggle(300);
});

/* clear menu */

$('.intro-layer, #about, #works, #contact, footer').click(function(){
    $(".menu").hide();
});

/* title fadeIn */

$(window).scroll(function(){
    $('.fadeIn').each(function(e){
        let bottom_of_object = $(this).offset().top + $(this).outerHeight(); 
        let bottom_of_window = $(window).scrollTop() + $(window).height();

        if(bottom_of_window > bottom_of_object){
            $(this).animate({'opacity':'1'},800);
        }
    })
})

/* toggle works tab */

function openWork(workName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = "";
    }
    document.getElementById(workName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

 
/* scroll to top button */

$(document).ready(function() {
    $('#to-top-btn').hide(0)
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
        $('#to-top-btn').fadeIn(200);      
        } else {
        $('#to-top-btn').fadeOut(300);
        }
    });
    $('#to-top-btn').click(function() {
        
        $('html , body').animate({scrollTop: 0}, 1000);
    });
});