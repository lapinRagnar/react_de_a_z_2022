import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CardMedia } from '@mui/material';




export default function CoffeeCard(props) {


  const { avatarUrl, title, subtitle, description, imageUrl } = props

  return (

    <Card sx={{ minWidth: 275 }}>

        <CardHeader
            avatar={ 
                <Avatar 
                    src={avatarUrl}
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
            image={imageUrl}
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
