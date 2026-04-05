import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

export default function FooterChino() {
  return (
    <Box sx={{ mt: 10 }}>
      <Divider />
      <Typography variant="caption" component="div" color="textSecondary" align="center" sx={{ py: 3 }}>
        Hecho con amor para aprender chino
      </Typography>
    </Box>
  )
}
