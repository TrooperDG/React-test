import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Share = () => {
  const title = "hello bro";
  const postUrl = `https://yourblog.com/posts/k987787`;

  return (
    <div className="post">
      <h2>{title}</h2>

      <div className="share-buttons">
        <p>Share this post:</p>

        <FacebookShareButton url={postUrl} quote={title}>
          <FaFacebook size={24} color="#1877F2" />
        </FacebookShareButton>

        <TwitterShareButton url={postUrl} title={title}>
          <FaTwitter size={24} color="#1DA1F2" />
        </TwitterShareButton>

        <WhatsappShareButton url={postUrl} title={title}>
          <FaWhatsapp size={24} color="#25D366" />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
