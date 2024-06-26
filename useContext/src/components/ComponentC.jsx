import styles from "./componentC.module.css";
import ComponentD from "./ComponentD";
import { DateContext, UserContext } from "./ComponentA";
import { useContext, useState } from "react";

export default function ComponentC() {
  const user = useContext(UserContext);
  const date = useContext(DateContext);
  return (
    <div className={styles.box}>
      <h1>ComponentC</h1>
      <h2>{`How are you, ${user}?`}</h2>
      <h3>{`it is ${date}`}</h3>
      <ComponentD />
    </div>
  );
}
