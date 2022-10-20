import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedTileSize, setSelectedTileSize] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSelectTileSize = (tileSize) => {
    setSelectedTileSize(tileSize);
  };

  const dummyImages = [
    {
      src: "/texture.jpg",
      tileSize: 1,
    },
  ];

  return (
    <Box style={{ width: "100%", height: 100 }}>
      <NavBar />
      <Box sx={{ height: "2rem" }} />
      <Box sx={{ color: "black", width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Typography
            fontSize={36}
            fontWeight="800"
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "fit-content",
            }}
          >
            Your Puzzles
          </Typography>
        </Box>
        <Box sx={{ height: "2rem" }} />
        {dummyImages.map((image, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{ maxWidth: 345, cursor: "pointer" }}
              onClick={() => handleCardClick(image)}
            >
              <CardMedia
                component="img"
                height="140"
                image={image.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Select The Tile Size"}
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "1rem",
            }}
          >
            {[9, 16, 25].map((tileSize) => (
              <Card
                sx={{
                  boxShadow: "0 1px 14px 0 #BDC9D7",
                  padding: `${
                    selectedTileSize === tileSize ? "2.2rem" : "1.5rem"
                  }`,
                  cursor: "pointer",
                  margin: "1rem",
                  width: "2rem",
                }}
                onClick={() => onSelectTileSize(tileSize)}
              >
                <Typography fontWeight={600} fontSize={24} textAlign="center">
                  {tileSize}
                </Typography>
              </Card>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Proceed
          </Button>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
