$(document).ready(function() {


    $(document).on("click", ".linkLogout", function() {
        $('#formLogoutHeader').submit();

    });
    $(document).on("click", ".linkRegisHealthy", function() {
        window.location.href = '../loginEmp.html';
    });
    $(document).on("click", "#btnBackDashboard", function() {
        window.location.href = '../dashboardAdmin.html';
    });

    $(function() {
        $('.timePickerInput').datetimepicker({
            format: 'HH:mm'
        });
    });



});