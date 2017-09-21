var camera, scene, renderer;

function render() {
	'use strict';
	renderer.render(scene,camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(windows.innerWith, window.innetHeight);
    document.body.appendChild(renderer.domElement);
    render();
}