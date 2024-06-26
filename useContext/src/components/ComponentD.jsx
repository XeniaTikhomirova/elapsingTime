import { UserContext, DateContext } from "./ComponentA";
import { useContext, useState } from "react";
import React from "react";
import styles from "./componentD.module.css";

export default function ComponentD() {
  const user = useContext(UserContext);
  const date = useContext(DateContext)
  return (
    <div className={styles.box}>
      <h1>ComponentD</h1>
      <h2>{`Bye, ${user}`}</h2>
      <h3>{`it is ${date}`}</h3>
    </div>
  );
}
