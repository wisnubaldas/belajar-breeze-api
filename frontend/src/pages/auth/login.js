import axios from "axios";
import { route } from 'ziggy-js';
import { Ziggy } from '/script/ziggy';
jQuery(function ($) {
    // Login form submit event
    $('.login-buttons').on('click', function (event) {
        event.preventDefault();

        // Get form data
        const formData = {
            email: $('#emailAddress').val(),
            password: $('#password').val(),
        };
        // console.log('Login form data:', formData);
        // Perform login
        login(formData);
    });

    // Perform login
    async function login(formData) {
        const csrf_url = route('sanctum.csrf-cookie', undefined, undefined, Ziggy);
        const login_url = route('login', undefined, undefined, Ziggy);
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
                email: formData.email,
                password: formData.password
            });

            console.log('Login successful:', response);
            // Redirect to dashboard
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Login failed:', error);
            // Display error message
            alert('Login failed: ' + (error.response ? error.response.data.message : error.message));
        }
    }
});

