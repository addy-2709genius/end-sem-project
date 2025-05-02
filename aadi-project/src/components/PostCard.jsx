const PostCard = ({ title, author, content, community }) => {
    return (
      <div className="card">
        <h3>{title}</h3>
        <p><strong>{author}</strong> in <em>{community}</em></p>
        <p>{content}</p>
      </div>
    );
  };
  
  export default PostCard;
  