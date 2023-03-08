$(document).on("click", ".scroller table tbody tr td", function () {
    $('#createBookingModal').modal('show');
});
$(function(){
    $('.placeModal').load("/createBookingModal.html");
});
