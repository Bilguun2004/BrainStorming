import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PostCard = (props) => {
  return (
    <Box width="370px" >
      <Card sx={{ borderRadius: "8%" }}>
        <CardMedia component="img" height="150" image={props.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.Secondary">
            {props.text}
          </Typography>

          <Box display="flex">
            <CardMedia
              sx={{ width: 45, borderRadius: "50%" }}
              component="img"
              height="45"
              // width="45"
              image={props.uploaderImage}
            />
            <Typography variant="caption">{props.uploaderName}</Typography>
            <Divider orientation="vertical" flexItem variant="middle" />
            <Typography variant="caption">{props.uploadedDate}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default PostCard;
