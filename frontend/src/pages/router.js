import Navigo from 'navigo';

const router = new Navigo('/');

function loadIndexPage() {
    fetch('/src/pages/index.pug')
        .then(response => response.text())
        .then(html => {
            document.getElementById('app').innerHTML = html;
        })
        .catch(error => console.error('Error loading index page:', error));
}

function loadLoginPage() {
    window.location.href = '/dist/auth/login.html';
}

function loadHelloComponent() {
    fetch('/src/pages/hello.pug')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading hello component:', error));
}

router.on('/', () => {
    loadIndexPage();
});

router.on('/login', () => {
    loadLoginPage();
});

router.on('/hello', () => {
    loadHelloComponent();
});

router.resolve();

export { router };
