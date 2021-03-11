import React from 'react'
import Box from '@material-ui/core/Box'

export interface FeatureProps {
    children: JSX.Element[] | JSX.Element
}

const Features = ({ children }: FeatureProps) => (
    <Box>
        {children}
    </Box>
)

export default Features