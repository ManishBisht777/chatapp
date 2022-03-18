import React from "react";
import Chatheader from "./Chatheader";
import styles from "../styles/chatview.module.css";
import avatar2 from "../assets/12.png";
import Messagecard from "./Messagecard";
import Messageform from "./Messageform";

const formattedMessagesArray = [
  {
    avatar: avatar2,
    sender: "one",
    createdAt: "yo",
    content: "yoyooy",
  },
];

const Chatview = () => {
  return (
    <div className={styles.chatView}>
      <Chatheader />
      <div className={styles.messagesContainer}>
        {formattedMessagesArray.map((message, index) => (
          <Messagecard
            key={index}
            avatar={message.avatar}
            sender={message.sender}
            timestamp={message.createdAt}
            content={message.content}
          />
        ))}
      </div>
      <Messageform />
    </div>
  );
};

export default Chatview;
