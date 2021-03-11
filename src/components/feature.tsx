import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

export interface FeatureProps {
    headline: String,
    text: String
}

const Feature = ({ headline, text }:FeatureProps) => (
    <Box>
        <Typography variant='h2' align='center'>{headline}</Typography>
        <p>image goes here</p>
        <Typography variant='body2' align='center'>{text}</Typography>
    </Box>
)

export default Feature