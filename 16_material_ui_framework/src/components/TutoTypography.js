import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'



export default function TutoTypography() {
  
  const classes = useStyles()

    return (
    <>
        <Typography
         className={classes.typographyStyle}
         align="right"
        >
            Aligner le texte à droit avec le props align="right"
        </Typography>
    </>
  )
}


const useStyles = makeStyles({
    typographyStyle: {

    }
})