$(document).ready(function(){
    $('.navbar-toggler').on('click', function(){
        if($('.navbar-collapse').hasClass('show')){
            $('.navbar-collapse').removeClass('show');
        } else {
            $('.navbar-collapse').addClass('show');
        }
        
    })
})
