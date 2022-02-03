import "./App.css";
import { Post } from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img className="app_header-image" src="./instaname.png" alt="" />
      </div>
      <h1>ABHINAV</h1>
      <Post
        username="Abhinav User"
        caption=" You can create a new album with the content just uploaded. You must
        create an account or sign in to save this content into your account."
        imageUrl="https://i.ibb.co/R41bHVx/image.png"
      />
      <Post />
      <Post />
      <Post />
      {/* Header */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default App;
