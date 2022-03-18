import ConversationList from "../component/ConversationList";
import Sidebar from "../component/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <ConversationList />
      </div>
    </div>
  );
}
