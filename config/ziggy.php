<?php
return [
    // // ...existing code...
    // 'whitelist' => [
    //     // Daftar rute yang diizinkan untuk diakses melalui Ziggy
    //     'home',
    //     'login',
    //     'register',
    //     // ...tambahkan rute lainnya sesuai kebutuhan...
    // ],
    // 'blacklist' => [
    //     // Daftar rute yang tidak diizinkan untuk diakses melalui Ziggy
    //     // ...tambahkan rute lainnya sesuai kebutuhan...
    // ],
    'middleware' => ['web','api','auth:sanctum'],
    // 'only' => ['login', 'register'],
    'except' => null,
    'skip-route-function' => false,
    'url' => env('APP_URL', 'http://localhost'),
    'port' => env('APP_PORT', 8000),
    'absolute' => false,
    'trailing_slash' => false,
];
