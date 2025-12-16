import * as React from "react";
import styles from "./SearchInput.module.css";
import { Search } from "lucide-react";

function SearchInput() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Search className={styles.icon} />
        <input className={styles.input} placeholder="Search for a country..." />
      </div>
    </div>
  );
}

export default SearchInput;
