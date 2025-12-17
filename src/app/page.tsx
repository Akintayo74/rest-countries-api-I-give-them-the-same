import styles from "./page.module.css";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SelectRegion from "@/components/SelectRegion";


export default function Home() {
  return (
    <div className={styles.page}>
      <SearchInput />
      <SelectRegion />
    </div>
  );
}
