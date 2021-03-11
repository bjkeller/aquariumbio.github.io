import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export interface SupportProps {
    headline: String,
    text: String
}

const Support = ({headline, text}: SupportProps) => (
    <Box>
        <Typography variant='h2' align='center'>
            {headline}
        </Typography>
        <Typography variant='body2' align='center'>
            {text}
        </Typography>
    </Box>
)

export default Support
