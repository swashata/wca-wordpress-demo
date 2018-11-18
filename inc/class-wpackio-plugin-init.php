<?php

class Wpackio_Plugin_Init {
	/**
	 * @var \WPackio\Enqueue
	 */
	public $enqueue;

	public function __construct() {
		// It is important that we init the Enqueue class right at the plugin/theme load time
		$this->enqueue = new \WPackio\Enqueue( 'wpackplugin', 'dist', '1.0.0', 'plugin', WPACKIO_SAMPLE_PLUGIN );
		// And heres a react app with shortcode
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue' ] );
		add_shortcode( 'wpackio-reactapp', [ $this, 'reactapp' ] );
	}

	public function enqueue() {
		$this->enqueue->enqueue( 'reactapp', 'main', [
			'js' => false,
			'css' => true
		] );
	}

	function reactapp( $atts, $content = null ) {
		// Enqueue our react app scripts
		$this->enqueue->enqueue( 'reactapp', 'main', [
			'js' => true,
			'css' => false
		] );

		// Print the entry point
		return '<div id="wpackio-reactapp"></div>';
	}
}
