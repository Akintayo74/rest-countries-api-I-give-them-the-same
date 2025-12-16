import styles from "./page.module.css";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";


export default function Home() {
  return (
    <div className={styles.page}>
      <SearchInput />
    </div>
  );
}
