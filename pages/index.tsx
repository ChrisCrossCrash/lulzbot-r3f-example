import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Mesh } from 'three'

type BoxProps = {
  position: [number, number, number]
}

function Box(props: BoxProps) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    if (!mesh.current) return
    mesh.current.rotation.x += 0.01
  })

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Home: NextPage = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}

export default Home
