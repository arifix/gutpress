<?php
/** 
 *  Plugin Name: Gutpress
 *  Plugin URI: https://madebyarif.com 
 *  Version: 1.0.0
 *  Author: Arif Khan 
 *  Author URI: https://arif-khan.net
 *  Description: Custom Gutenburg blocks to add custom functionalities to your WordPress site. Brought to you by Arif Khan with <3
 *  Text Domain: gutpress
 *  Last Updated on: 06-11-2022(MM-DD-YYYY), 02:02PM (GMT+06)
 * 
 */

 // Register Category
if(!function_exists('gutpress_categories')) {
    function gutpress_categories($categories, $post) {
        return array_merge(
            $categories, 
            array(
                array(
                    'slug' => 'gutpress-blocks',
                    'title' => __('Gutpress', 'gutpress'),
                    'icon' => 'schedule'
                )
            )
        );
    }
    add_filter('block_categories_all', 'gutpress_categories', 10, 2);
}

// Register Blocks
function gutpress_register_blocks() {
    // Check if Gutenberg is active.
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

    // Add block script
    wp_register_script(
        'gutpress-block', 
        plugins_url( 'build/index.js', __FILE__ ),
        ['wp-blocks', 'wp-editor', 'wp-components'] //dependencies
    );

    // Add block style
    wp_register_style(
        'style',
        plugins_url( 'styles/style.css', __FILE__ ),
        []
    );

    $blocks = [
        'gutpress/alert',
        'gutpress/blockquote',
        'gutpress/call-to-action',
        'gutpress/card',
        'gutpress/testimonial',
    ];


    // Register block script and style
    foreach( $blocks as $block ) {
        register_block_type( $block, [
            'style' => 'style',
            'editor_script' => 'gutpress-block',
        ] );
    }
}
add_action( 'init', 'gutpress_register_blocks' );