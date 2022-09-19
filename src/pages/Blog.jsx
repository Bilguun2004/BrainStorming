import { Box, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Author, BlogHeader, CommentBox } from "../components/Blog/index";
import { sendRequest } from "../utils/Api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const getData = async () => {
  const users = await sendRequest("post/60d21b4667d0d8992e610c85", "GET");
  console.log(users);
};
getData();

const blog = {
  title: "10 Secrets for managing a remote team ",
  image:
    "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
  text: `If you're thinking of starting a blog of your own, but just don't have a clue on what to blog about, then fear not!  
    \n
    In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.
    \n
    Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.
    \n
    Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.
    \n
    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and 
    \n
    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
    Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.`,
  owner: {
    name: "John Doe",
    role: "CEO Team App",
    createdAt: "2nd January,2022",
  },
};

const useStyles = makeStyles({
  container: {
    margin: "5rem",
    display: "flex",
    justifyContent: "center",
  },
  blog: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: "130%",
    margin: "20px 0",
    transform: "translateX(-11%)",
  },
});

const Blog = () => {
  const classes = useStyles();
  return (
    <>
    <Navbar/>
    <Box className={classes.container}>
      <Box className={classes.blog}>
        <BlogHeader blog={blog} />
        <img className={classes.image} src={blog.image} alt="blog" />
        <Typography my={5} variant="body1" align="justify">
          {blog.text.replace("\n", <br />)}
        </Typography>
        <Author author={blog.owner} />
        <Divider sx={{ marginY: 5 }} />
        <CommentBox />
      </Box>
    </Box>
    <Footer/>
    </>
    
  );
};
export default Blog;
