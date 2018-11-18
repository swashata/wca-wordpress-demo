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
		add_shortcode( 'wpackio-reactapp', [ $this, 'reactapp' ] );
	}

	function reactapp( $atts, $content = null ) {
		// Enqueue our react app scripts
		$this->enqueue->enqueue( 'reactapp', 'main', [] );

		// Print the entry point
		return '<div id="wpackio-reactapp"></div>';
	}
}
