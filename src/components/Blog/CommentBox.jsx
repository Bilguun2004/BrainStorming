import { Avatar, Box, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  flex: {
    display: "flex",
  },
});

export const CommentBox = () => {
  const classes = useStyles();
  return (
    <Box mb={5}>
      <Typography my={2} color="#6D7D8B" variant="h5">
        Join the conversation
      </Typography>
      <Box className={classes.flex}>
        <Avatar
          alt="Blog Team"
          src="https://material-ui.com/static/images/avatar/2.jpg"
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <TextField
          sx={{ width: "100%" }}
          placeholder="Comments"
          multiline
          rows={5}
        />
      </Box>
    </Box>
  );
};
