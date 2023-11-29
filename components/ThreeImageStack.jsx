'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const ThreeImageStack = ({ images }) => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  )
  const renderer = new THREE.WebGLRenderer()

  const stackRef = useRef()

  useEffect(() => {
    // Set up scene, camera, and renderer

    // Create a stack of images
    images.forEach((image, index) => {
      const geometry = new THREE.PlaneGeometry(5, 5) // Adjust size as needed
      const texture = new THREE.TextureLoader().load(image)
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      })
      const plane = new THREE.Mesh(geometry, material)

      // Adjust the position of each image in the stack
      plane.position.set(0, 0, -index * 0.1) // Adjust the Z-coordinate based on the index

      scene.add(plane)
    })

    // Set up camera position
    camera.position.z = 5

    // Append renderer to the DOM
    renderer.setSize(window.innerWidth, window.innerHeight)
    stackRef.current.appendChild(renderer.domElement)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [images])

  return <div ref={stackRef}></div>
}

export default ThreeImageStack
