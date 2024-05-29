document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('accessibility-sidebar');
    if (sidebar.classList.contains('d-none')) {
        sidebar.classList.remove('d-none');
    } else {
        sidebar.classList.add('d-none');
    }
});

let fontSize = 18; 
let maxFontSize = 32;

function adjustFontSize() {
    document.querySelectorAll('p, h1, h2, a').forEach(function(element) {
        if (document.body.classList.contains('readable-font')) {
            element.style.fontSize = `${fontSize * 1.2}px`;
        } else {
            if (element.tagName === 'H1') {
                element.style.fontSize = '2.5rem';
            } else if (element.tagName === 'H2') {
                element.style.fontSize = '2rem';
            } else {
                element.style.fontSize = `${fontSize}px`;
            }
        }
    });
}

document.querySelector('.accessibility-sidebar-item-resize-plus').addEventListener('click', function() {
    if (fontSize < maxFontSize) {
        fontSize += 2; 
        if (fontSize > maxFontSize) {
            fontSize = maxFontSize;
        }
        adjustFontSize();
    }
});

document.querySelector('.accessibility-sidebar-item-resize-minus').addEventListener('click', function() {
    if (fontSize > 20) { 
        fontSize -= 2; 
        adjustFontSize();
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

document.querySelector('.accessibility-sidebar-item-resize-underline-links').addEventListener('click', function() {
    document.body.classList.toggle('underline-links');
});

document.querySelector('.accessibility-sidebar-item-resize-readable-font').addEventListener('click', function() {
    document.body.classList.toggle('readable-font');
    adjustFontSize();
});

function resetStyles() {
    document.querySelectorAll('p, h1, h2, a').forEach(function(element) {
        element.style.fontSize = '';
    });

    document.body.classList.remove('high-contrast', 'negative-contrast', 'light-background', 'underline-links', 'readable-font');

    document.body.style.filter = '';
}

document.querySelector('.accessibility-sidebar-item-resize-reset').addEventListener('click', function() {
    resetStyles();
});

