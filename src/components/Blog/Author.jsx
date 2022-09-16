import { Box, Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  flex: {
    display: "flex",
  },
});

export const Author = ({ author }) => {
  const classes = useStyles();
  return (
    <Box className={classes.flex}>
      <Avatar
        alt={author.name}
        src="https://material-ui.com/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56, mr: 2 }}
      />
      <Box>
        <Typography color="#1E2742" variant="body2">
          Written by
        </Typography>
        <Typography color="#25313C" variant="h5">
          {author.name}
        </Typography>
        <Typography color="#989898">{author.role}</Typography>
      </Box>
    </Box>
  );
};
