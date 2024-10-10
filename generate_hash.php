<?php
// Replace 'mySecretPassword' with your actual password
$hashed_password = password_hash('CHOCOLATE', PASSWORD_DEFAULT);
echo $hashed_password;
?>
