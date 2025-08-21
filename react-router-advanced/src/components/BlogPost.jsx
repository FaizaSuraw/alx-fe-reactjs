import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {postId}</h2>
      <p>This is a dynamic blog post page.</p>
    </div>
  );
};

export default BlogPost;
