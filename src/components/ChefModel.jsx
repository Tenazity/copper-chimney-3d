import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ChefModel(props) {
    const { scene } = useGLTF('/models/A_Friendly_3D_Chef_Character.glb')

    // Enable shadows for all meshes in the scene
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
        }
    })

    return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/A_Friendly_3D_Chef_Character.glb')
