let shortcut_labels = document.querySelectorAll(".shortcut-label");

for (let i = 0; i < shortcut_labels.length; i++) {
    if (shortcut_labels[i].textContent.length > 8) {
        shortcut_labels[i].textContent = shortcut_labels[i].textContent.slice(0, 8) + '...';
    }
}


let input = document.querySelector("main a input");
let a = document.querySelector("main a");

a.addEventListener("click", e => {
    e.preventDefault();
})

let base_url = 'https://google.com/search?q=';
let search_term = '';

a.addEventListener("keypress", e => {
    if (e.key == 'Enter' && input.value != '') {
        search_term = input.value.split(' ').join('+');
        a.setAttribute('href', base_url + search_term);
        a.removeEventListener("click", e => {
            e.preventDefault();
        });
        a.click();
        input.value = '';
    }
})


// #2b2a33(body)  #42414d(input/shortcut)   #55555c(hover)

let theme_toggle = document.querySelector('.theme-toggle');
let link = document.querySelector('head>link');

theme_toggle.addEventListener('click', () => {
    if (link.getAttribute('href') === 'index.css') {
        link.setAttribute('href', 'dark.css');
    }
    else {
        link.setAttribute('href', 'index.css');
    }
})
