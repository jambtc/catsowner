<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class CryptoLandingAsset extends AssetBundle
{
    public $basePath = '@webroot/bundles/crypto-page';
    public $baseUrl = '@web/bundles/crypto-page';
    public $css = [
        'font/font-awesome-4.7.0/css/font-awesome.min.css',
        'css/dark.css',

    ];
    public $js = [
        'js/popper.js',
        'js/particles.min.js',
        'js/jquery.downCount.js',
        'js/parallax.min.js',
        'js/scrollreveal.min.js',
        'js/custom.js',

    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap4\BootstrapPluginAsset',
    ];
}
