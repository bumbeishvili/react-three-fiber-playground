import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom'


import { Canvas, useFrame } from 'react-three-fiber'

import { Button } from '@storybook/react/demo';

export default { title: 'Start' };


function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}


export const withSimpleCubes = ({ posX, label, ...args }) => {
    return (
        <div>
            {label}
            <Canvas
            >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[posX, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </div>
        )
};


withSimpleCubes.args = { posX: -2, label: 'Custom Label Name' };
withSimpleCubes.argTypes = {
    posX: { control: { type: 'range', min: -10, max: 10 } }
};

