import React from 'react'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    buttonStyle: {
        color: props => (props.cool ? "red" : "yellow !important")
    },
    textStyle: {
        color: 'goldenrod'
    }, 
    plusieursPropsStyle: props => {
        return {
            color: props.cool ? 'darkmagenta' : 'blueviolet',
            fontSize: props.cool ? '30px' : '70px',
            border: !props.cool ? '1px solid orange' : null
        }
    }
})

export default function CoolButton(props) {
  
  const classes = useStyles()
  return (
      <>
        <Button className={classes.buttonStyle}>Mon super bouton avec des styles qui a des props</Button>
        <h1 className={classes.textStyle}>Ceci est un text</h1>
        <div className={classes.plusieursPropsStyle}>Plusieurs props dans le style</div>
      </>
  )
}
