<?php
$secrets = require __DIR__ . '/secrets.php';

return [
    'adminEmail' => 'admin@example.com',
    'senderEmail' => 'noreply@example.com',
    'senderName' => 'Example.com mailer',

    'smartcontract_address' => $secrets['smartcontract_address'],
];
