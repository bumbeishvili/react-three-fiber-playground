import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber'
import { Box } from '../Components/Box/Box'


export default { title: 'Basics' };


// ****************  SIMPLE CUBES *******************/
export const simpleCubes = ({ posX, label, ...args }) => {
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
simpleCubes.args = { posX: -5, label: 'Custom Label Name' };
simpleCubes.argTypes = {
    posX: { control: { type: 'range', min: -10, max: 10 } }
};

