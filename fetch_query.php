<?php
$name = htmlspecialchars($_GET['name'], ENT_QUOTES | ENT_HTML5, 'UTF-8');
if ($name !== '') {
    print('こんにちは、' . $name . 'さん！');
}
