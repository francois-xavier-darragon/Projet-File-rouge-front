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

//TODO a corriger
// function adjustAccessibilitySidebarPosition() {
//     let accessibilitySidebar = document.getElementById('accessibility-sidebar');
//     let fontSize = parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'));
//     let topPosition = 300 + fontSize; 
//     console.log(topPosition)
//     accessibilitySidebar.style.top = topPosition + 'px';
// }

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
        // adjustAccessibilitySidebarPosition();
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
    const elements = document.querySelectorAll('.bg-dark, .inverted-dark, .btn-primary, .inverted-btn-primary, .text-primary, .inverted-text-primary, .bg-black, .inverted-bg-black, .bg-white, .inverted-bg-white, .text-black, .inverted-text-black, .text-white, .inverted-text-white', );

    const classMappings = {
        'bg-dark': 'inverted-dark',
        'inverted-dark': 'bg-dark',
        'btn-primary': 'inverted-btn-primary',
        'inverted-btn-primary': 'btn-primary',
        'text-primary': 'inverted-text-primary',
        'inverted-text-primary': 'text-primary',
        'bg-black': 'inverted-bg-black',
        'inverted-bg-black': 'bg-black',
        'bg-white': 'inverted-bg-white',
        'inverted-bg-white': 'bg-white',
        'text-black': 'inverted-text-black',
        'inverted-text-black': 'text-black',
        'text-white': 'inverted-text-white',
        'inverted-text-white': 'text-white'
    };

    elements.forEach(htmlElement => {
        for (const originalClass in classMappings) {
            if (htmlElement.classList.contains(originalClass)) {
                const invertedClass = classMappings[originalClass];
                htmlElement.classList.remove(originalClass);
                htmlElement.classList.add(invertedClass);
                break;
            }
        }
    });
    
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

const accessibilityItems = [
    { selector: '.accessibility-sidebar-item-resize-plus', handler: increaseFontSize },
    { selector: '.accessibility-sidebar-item-resize-minus', handler: decreaseFontSize },
    { selector: '.accessibility-sidebar-item-resize-greyscale', handler: toggleGreyscale },
    { selector: '.accessibility-sidebar-item-resize-high-contrast', handler: toggleContrast },
    { selector: '.accessibility-sidebar-item-resize-negative-contrast', handler: toggleNegativeContrast },
    { selector: '.accessibility-sidebar-item-resize-light-background', handler: toggleLightBackground },
    { selector: '.accessibility-sidebar-item-resize-underline-links', handler: toggleUnderlineLinks },
    { selector: '.accessibility-sidebar-item-resize-readable-font', handler: toggleReadableFont },
    { selector: '.accessibility-sidebar-item-resize-reset', handler: resetStyles }
];

accessibilityItems.forEach(item => {
    document.querySelector(item.selector).addEventListener('click', item.handler);
});

