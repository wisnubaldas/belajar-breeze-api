import {Helper} from "@scripts/helper";

const helper = new Helper();
const csrfToken = helper.getCsrfToken();

export { csrfToken };