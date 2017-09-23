/*global THREE*/

var  scene,renderer,camera;

function createScene() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );

	camera.position.z = 50;
	var geometry = new THREE.CubeGeometry(10,10,10);
	var material= new THREE.MeshBasicMaterial( {color:0x00ff00,wireframe:true}  );
	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
}



function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    createScene();
    render();
}

function animate(){
	scene.rotation.x += 0.04;
	scene.rotation.y += 0.02;
	render();
	requestAnimationFrame(animate);

}
function render() {
	renderer.render(scene,camera);
}
