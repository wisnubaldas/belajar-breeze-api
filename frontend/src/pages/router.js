import Navigo from 'navigo';
import {Helper} from "@scripts/helper";
import Hello from '../components/hello.pug?raw';

const helper = new Helper();
const router = new Navigo('/');

function loadIndexPage() {
    if (helper.checkAuth()) {
        window.location.href = '/dashboard';
    } else {
        window.location.href = '/auth/login';
    }
}

function loadLoginPage() {
    window.location.href = '/auth/login';
}

function loadHelloComponent() {
    document.getElementById('content').innerHTML = Hello();
}
router.on('/', () => {
    loadIndexPage();
});
router.on('/dashboard', () => {
    if(!helper.checkAuth()){
        window.location.href = '/auth/login';
    }
});

router.on('#/hello', () => {
    loadHelloComponent();
});

router.resolve();

export { router };
