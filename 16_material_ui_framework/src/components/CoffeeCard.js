import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CardMedia } from '@mui/material';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
)


export default function CoffeeCard(props) {


  const { avatarSrc, title, subtitle, description, imageSrc } = props

  return (

    <Card sx={{ minWidth: 275 }}>

        <CardHeader
            avatar={ 
                <Avatar 
                    src={avatarSrc}
                />
            
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={title}
            subheader={subtitle}
        />

        <CardMedia
            component="img"
            height="194"
            image={imageSrc}
            alt="Paella dish"
            style={{ height: "10%"}}
        />

        <CardContent>

            <Typography 
                sx={{ fontSize: 14 }} 
                color="text.secondary" 
                gutterBottom
            >
                { description }
            </Typography>

            

        </CardContent>
        <CardActions>
            <Button size="small">Acheter</Button>
        </CardActions>
    </Card>
  )
}
