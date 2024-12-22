import axios from "axios";
import { route } from 'ziggy-js';
import { Ziggy } from './ziggy';

const csrf_url = route('sanctum.csrf-cookie', undefined, undefined, Ziggy);
const login_url = route('login', undefined, undefined, Ziggy);
const user_url = 'localhost:8000/api/user';

async function login(username, password) {
    try {
        axios.defaults.withCredentials = true;
        // Get CSRF token
        await axios.get(csrf_url);

        // Retrieve CSRF token from cookies
        const csrfCookie = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN'));
        if (!csrfCookie) {
            throw new Error('CSRF token not found in cookies');
        }
        const csrfToken = decodeURIComponent(csrfCookie.split('=')[1]);

        // Set CSRF token in headers
        axios.defaults.headers.common['X-XSRF-TOKEN'] = csrfToken;

        // Perform login with CSRF token in headers
        const response = await axios.post(login_url, {
            email: username,
            password: password
        });

        console.log('Login successful:', response);
    } catch (error) {
        console.error('Login failed:', error);
    }
}

async function get_user() {
    try {
        axios.defaults.withCredentials = true;
        // Get user data
        const response = await axios.get(user_url);
        console.log('User data:', response.data);
    } catch (error) {
        console.error('Failed to get user data:', error);
    }
}

window.x = window.x || {};
// Example usage
window.x.login = login('admin@admin.com', 'password');
window.x.get_user = get_user;

