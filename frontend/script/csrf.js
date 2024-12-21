const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const generateCsrfToken = () => crypto.randomBytes(16).toString('hex');