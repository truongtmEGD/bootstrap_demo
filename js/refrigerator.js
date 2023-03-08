$(document).ready(function() {



    $(document).on('click', "#btnExport", function(e) {
        e.preventDefault();
        $('#dateSearchExportModal').modal('show');
    });
    $(document).on('click', ".dateIconSearch", function(e) {
        e.preventDefault();
        $('#dateSearchModal').modal('show');
    });



});