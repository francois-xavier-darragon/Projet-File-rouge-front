document.getElementById('menu-toggle').addEventListener('click', function() {
    let sidebar = document.getElementById('accessibility-sidebar');
    if (sidebar.classList.contains('d-none')) {
        sidebar.classList.remove('d-none');
    } else {
        sidebar.classList.add('d-none');
    }
});

let fontSize = 20; 
let maxFontSize = 32;

function adjustAccessibilitySidebarPosition() {
    let accessibilitySidebar = document.getElementById('accessibility-sidebar');
    let fontSize = parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'));
    let topPosition = 300 + fontSize; 
    console.log(topPosition)
    accessibilitySidebar.style.top = topPosition + 'px';
}

function adjustFontSize() {
    document.querySelectorAll('p, h1, h2, a').forEach(function(element) {
        if (document.body.classList.contains('readable-font')) {
            element.style.fontSize = `${fontSize * 1.2}px`;
        } else {
            switch (element.tagName) {
                case 'H1':
                    element.style.fontSize = '2.5rem';
                    break;
                case 'H2':
                    element.style.fontSize = '2rem';
                    break;
                default:
                    element.style.fontSize = `${fontSize}px`;
                    break;
            }
        }
    });
}

function increaseFontSize() {
    if (fontSize < maxFontSize) {
        fontSize += 2; 
        if (fontSize > maxFontSize) {
            fontSize = maxFontSize;
        }
        adjustFontSize();
        adjustAccessibilitySidebarPosition();
    }
}

function decreaseFontSize() {
    if (fontSize > 20) { 
        fontSize -= 2;
        adjustFontSize();
    } else {
        document.querySelectorAll('p, h1, h2, a').forEach(function(element) {
            element.style.fontSize = '';
        });
        element.style.fontSize = '';
        adjustFontSize();
    }
}


function toggleGreyscale() {
    document.documentElement.style.filter = document.documentElement.style.filter === 'grayscale(100%)' ? '' : 'grayscale(100%)';
}

function toggleContrast() {
    document.documentElement.classList.toggle('high-contrast');
}

function toggleNegativeContrast() {
    document.documentElement.classList.toggle('negative-contrast');
}

function toggleLightBackground() {
    document.documentElement.classList.toggle('light-background');
}

function toggleUnderlineLinks() {
    document.body.classList.toggle('underline-links');
}

function toggleReadableFont() {
    document.body.classList.toggle('readable-font');
    adjustFontSize();
}

function resetStyles() {
    document.querySelectorAll('p, h1, h2, a').forEach(function(element) {
        element.style.fontSize = '';
    });

    document.body.classList.remove('high-contrast', 'negative-contrast', 'light-background', 'underline-links', 'readable-font');

    document.documentElement.style.filter = '';
}

document.querySelector('.accessibility-sidebar-item-resize-plus').addEventListener('click', increaseFontSize);
document.querySelector('.accessibility-sidebar-item-resize-minus').addEventListener('click', decreaseFontSize);
document.querySelector('.accessibility-sidebar-item-resize-greyscale').addEventListener('click', toggleGreyscale);
document.querySelector('.accessibility-sidebar-item-resize-high-contrast').addEventListener('click', toggleContrast);
document.querySelector('.accessibility-sidebar-item-resize-negative-contrast').addEventListener('click', toggleNegativeContrast);
document.querySelector('.accessibility-sidebar-item-resize-light-background').addEventListener('click', toggleLightBackground);
document.querySelector('.accessibility-sidebar-item-resize-underline-links').addEventListener('click', toggleUnderlineLinks);
document.querySelector('.accessibility-sidebar-item-resize-readable-font').addEventListener('click', toggleReadableFont);
document.querySelector('.accessibility-sidebar-item-resize-reset').addEventListener('click', resetStyles);


