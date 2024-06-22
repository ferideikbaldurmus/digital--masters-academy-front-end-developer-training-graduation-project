$(function() {
    // Navbarı yükleme işlemi
    $.get("navbar.html", function(data) {
        $("#navbar").html(data);
    });
});
