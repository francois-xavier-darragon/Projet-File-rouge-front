document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('d-none')) {
        sidebar.classList.remove('d-none');
    } else {
        sidebar.classList.add('d-none');
    }
});
