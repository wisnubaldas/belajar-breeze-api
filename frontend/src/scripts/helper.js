export class Helper {
    constructor(parameters) {
        
    }
    checkAuth() { // Ensure method name is correct
        // Retrieve CSRF token from cookies
        const csrfCookie = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN'));
        if (!csrfCookie) {
            // throw new Error('CSRF token not found in cookies');
            window.location.href = '/auth/login';
            return false;
        }
        const csrfToken = decodeURIComponent(csrfCookie.split('=')[1]);
        return csrfToken !== undefined;
    }
    getCsrfToken() {
        const csrfCookie = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN'));
        if (!csrfCookie) {
            throw new Error('CSRF token not found in cookies');
        }
        return decodeURIComponent(csrfCookie.split('=')[1]);
    }
}