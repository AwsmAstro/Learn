<?php
$config['db_host'] = 'localhost';
$config['db_user'] = 'root';
$config['db_password'] = '';
$config['db_name'] = 'database';

foreach ($config as $key => $value) {
    define(strtoupper($key), $value);
}