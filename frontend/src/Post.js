import React from "react";
import "./Post.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";

export const Post = ({ username, caption, imageUrl }) => {
  return (
    <div className="post">
      {/* header  --> avatar + username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />

        <h3>Username</h3>
      </div>
      {/* image */}
      <img
        className="post__Image"
        src="https://i.ibb.co/R41bHVx/image.png"
        alt=""
      />
      {/* username and caption */}
      <h4 className="post__text">
        {" "}
        <strong>Abhinav</strong>
        You can create a new album with the content just uploaded. You must
        create an account or sign in to save this content into your account.
      </h4>
    </div>
  );
};
