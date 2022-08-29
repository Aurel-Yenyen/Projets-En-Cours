// Création de la scène

const scene = new THREE.Scene()

// Création d'un cube rouge

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'blue' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh) // Ajout de la forme à la scène

// Taille de la scène

const sizes = {
    width: 800,
    height: 600
}
// Création de la caméra

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
camera.position.x = 2
camera.position.y = 1
scene.add(camera)  // Ajout de la caméra à la scène




//Création du Rendu
const canvas = document.querySelector('.webgl') // Ajout dee l'élément HTML Canva
const renderer  = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)