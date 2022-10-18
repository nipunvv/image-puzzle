import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect } from "react";
import NavBar from "./NavBar";

export default function Home() {

  return (
    <Box style={{ width: '100%', height: 100 }}>
      <NavBar />
      <Box sx={{height: '2rem'}}/>
      <Box sx={{ color: 'black', width: '100%' }}>
        <Box sx={{ width: '100%' }}>
          <Typography
            fontSize={36}
            fontWeight='800'
            sx={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: 'fit-content'
            }}>
            Images
          </Typography>
        </Box>
        <Box sx={{height: '2rem'}}/>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="/texture.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}