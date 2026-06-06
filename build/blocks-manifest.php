<?php
// This file is generated. Do not modify it manually.
return array(
	'kc-landing-tile' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/kc-landing-tile',
		'version' => '0.1.0',
		'title' => 'Kc Landing Tile',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.kc-tile__title',
				'default' => 'Tile title'
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'mediaUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'mediaId' => array(
				'type' => 'number'
			),
			'overlayColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'overlayOpacity' => array(
				'type' => 'number',
				'default' => 0.45
			),
			'hoverZoom' => array(
				'type' => 'number',
				'default' => 1.08
			),
			'shadow' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'textdomain' => 'kc-landing-tile',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
