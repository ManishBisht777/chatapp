import styles from "../styles/sidebar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import avatar from "../assets/12.png";
import RoomAvatar from "./Roomavatar";

const dummychannels = [
  {
    id: 1,
    name: "one",
    avatar: avatar,
  },
  {
    id: 2,
    name: "two",
    avatar: avatar,
  },
  {
    id: 3,
    name: "three",
    avatar: avatar,
  },
  {
    id: 4,
    name: "four",
    avatar: avatar,
  },
];

const Sidebar = () => {
  const [channels, usechannels] = useState(dummychannels);

  return (
    <div className={styles.wrapper}>
      {channels.map((channel, index) => (
        <RoomAvatar
          key={index}
          id={channel.id}
          avatar={channel.avatar}
          name={channel.name}
        />
      ))}
    </div>
  );
};

export default Sidebar;
