import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function NavigationLink({href, name}) {
  return (
    <Grid item xs={1}>
      <Link href={href}>{name}</Link>
    </Grid>
  )
}

export default NavigationLink