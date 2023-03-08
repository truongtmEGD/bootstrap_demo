$(document).ready(function() {
    $('[id^=editNumber]').keypress(validateNumber);

    //Stop people from typing
    // $('.spinner input').keydown(function(e) {
    //     e.preventDefault();
    //     //return false;



    // });
    $('.spinner input').on('keyup keydown', function(e) {
        if ($(this).val() > 100 &&
            e.keyCode !== 46 &&
            e.keyCode !== 8
        ) {
            e.preventDefault();
            $(this).val(100);
        }
    });

    var minNumber = 0;
    var maxNumber = 100;
    $('.spinner .btn:first-of-type').on('click', function() {
        if ($('.spinner input').val() == maxNumber) {
            return false;
        } else {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
        }
    });

    $('.spinner .btn:last-of-type').on('click', function() {
        if ($('.spinner input').val() == minNumber) {
            return false;
        } else {
            $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
        }
    });


    function validateNumber(event) {
        var key = window.event ? event.keyCode : event.which;
        if (event.keyCode === 8 || event.keyCode === 46) {
            return true;
        } else if (key < 48 || key > 57) {
            return false;
        } else {
            return true;
        }
    };

});