import axios from "axios";
import { route } from 'ziggy-js';
import { Ziggy } from '/script/ziggy';
import { Helper } from "@scripts/helper";
import "@scripts/MyApp";
const helper = new Helper();
const csrfToken = helper.getCsrfToken();

jQuery(function($) {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    const menuUri = route('get-menu', undefined, undefined, Ziggy);
    axios.get(menuUri).then(response => {
        console.log(response.data);
        // Use the Pug runtime to compile the template
        // const compiledFunction = window.pug.compile('p Hello world!');
        // $('#top-navbar').html(compiledFunction(response.data));
    }).catch(error => {
        console.error('Error fetching menu:', error);
    });
});