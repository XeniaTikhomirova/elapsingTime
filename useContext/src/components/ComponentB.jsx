import styles from "./componentB.module.css";
import ComponentC from "./ComponentC";

export default function ComponentB() {
  return (
    <div className={styles.box}>
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  );
}
