import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CloseIcon from "@mui/icons-material/Cancel";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Box>
      <NavBar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            borderRadius: "2rem",
            width: "50%",
            mt: "2rem",
            boxShadow: "0 8px 16px 0 #BDC9D7",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              fontFamily={"sans-serif"}
              fontWeight="600"
              fontSize="2rem"
              mt="2rem"
            >
              Upload Your Image
            </Typography>
          </Box>
          {preview ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={preview} width="100" height="100" />
              <CloseIcon
                sx={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  cursor: "pointer",
                  color: "red",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
                onClick={() => setSelectedFile(null)}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "5px solid #eee",
                borderStyle: "dashed",
                padding: "1.5rem 2.5rem",
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2rem",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              <Typography fontSize={"2rem"} fontWeight={600} color="#eee">
                +
              </Typography>
              <label
                for="file-upload"
                class="custom-file-upload"
                style={{
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              ></label>
              <input
                id="file-upload"
                type="file"
                accept=".png,.jpg,.jpeg"
                style={{ display: "none" }}
                onChange={onSelectFile}
              />
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              color="secondary"
              marginLeft="auto"
              marginRight="auto"
              sx={{ width: "60%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              color="secondary"
              marginLeft="auto"
              marginRight="auto"
              multiline
              rows={2}
              maxRows={4}
              sx={{ width: "60%" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: "2rem" }}>
            <Button variant="contained">Submit</Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
