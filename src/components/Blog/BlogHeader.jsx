import { Box, Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    color: "#6D7D8B",
  },
  bold: {
    fontWeight: "bold !important",
  },
});

export const BlogHeader = ({ blog }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.bold} variant="h4">
        {blog.title}
      </Typography>
      <Box my={4} className={classes.container}>
        <Avatar
          sx={{ width: 56, height: 56, mr: 2 }}
          alt={blog.name}
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Typography mx={3}>{blog.owner.name}</Typography>|
        <Typography mx={3}>{blog.owner.createdAt}</Typography>
      </Box>
    </>
  );
};
