document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('accessibility-sidebar');
    if (sidebar.classList.contains('d-none')) {
        sidebar.classList.remove('d-none');
    } else {
        sidebar.classList.add('d-none');
    }
});

let fontSize = 22; 
let maxFontSize = 32;

document.querySelector('.accessibility-sidebar-item-resize-plus').addEventListener('click', function() {
    
    if (fontSize < maxFontSize) {
        fontSize += 2; 
        if (fontSize > maxFontSize) {
            fontSize = maxFontSize;
        }
        document.querySelectorAll('p, h1, h2, a').forEach(function(element) {
            element.style.fontSize = `${fontSize}px`;
        });
    }
})

document.querySelector('.accessibility-sidebar-item-resize-minus').addEventListener('click', function() {
    if (fontSize > 20) { 
        fontSize -= 2; 
        document.querySelectorAll('p, h1, h2, a').forEach(function(element) {
            if (element.tagName === 'H1') {
                element.style.fontSize = '2.5rem';
            } else if (element.tagName === 'H2') {
                element.style.fontSize = '2rem';
            } else {
                element.style.fontSize = `${fontSize}px`;
            }
        });
    }
});

document.querySelector('.accessibility-sidebar-item-resize-greyscale').addEventListener('click', function() {
    if (document.documentElement.style.filter === 'grayscale(100%)') {
        document.documentElement.style.filter = '';
    } else {
        document.documentElement.style.filter = 'grayscale(100%)';
    }
});

document.querySelector('.accessibility-sidebar-item-resize-high-contrast').addEventListener('click', function() {
    document.documentElement.classList.toggle('high-contrast');
});

document.querySelector('.accessibility-sidebar-item-resize-negative-contrast').addEventListener('click', function() {
    document.documentElement.classList.toggle('negative-contrast');
});

document.querySelector('.accessibility-sidebar-item-resize-light-background').addEventListener('click', function() {
    document.documentElement.classList.toggle('light-background');
});



