import { useState, useRef, createContext, useEffect } from "react";
import styles from "./componentA.module.css";
import ComponentB from "./ComponentB";

export const UserContext = createContext();
export const DateContext = createContext();

export default function ComponentA() {
  const [user, setUser] = useState("Kseniia");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("Rerendering!");
  });

  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  const inputThree = useRef(null);
  const inputFour = useRef(null);

  function handleClick1() {
    console.log(inputOne.current);
    inputOne.current.focus();
    inputOne.current.style.backgroundColor = "green";
    inputTwo.current.style.backgroundColor = "";
    inputThree.current.style.backgroundColor = "";
    inputFour.current.style.backgroundColor = "";
  }

  function handleClick2() {
    console.log(inputOne.current);
    inputTwo.current.focus();
    inputOne.current.style.backgroundColor = "";
    inputTwo.current.style.backgroundColor = "green";
    inputThree.current.style.backgroundColor = "";
    inputFour.current.style.backgroundColor = "";
  }

  function handleClick3() {
    console.log(inputOne.current);
    inputThree.current.focus();
    inputOne.current.style.backgroundColor = "";
    inputTwo.current.style.backgroundColor = "";
    inputThree.current.style.backgroundColor = "green";
    inputFour.current.style.backgroundColor = "";
  }

  function handleClick4() {
    console.log(inputOne.current);
    inputFour.current.focus();
    inputOne.current.style.backgroundColor = "";
    inputTwo.current.style.backgroundColor = "";
    inputThree.current.style.backgroundColor = "";
    inputFour.current.style.backgroundColor = "blue";
  }

  return (
    <div className={styles.box}>
      {/*<h1>ComponentA</h1>
      <h2>{`Hello ${user}!`}</h2>
      <h3>{`it is ${date}`}</h3>*/}

      <button onClick={handleClick1}>Click</button>
      <input ref={inputOne} />

      <button onClick={handleClick2}>Click</button>
      <input ref={inputTwo} />

      <button onClick={handleClick3}>Click</button>
      <input ref={inputThree} />

      <button onClick={handleClick4}>Click</button>
      <input ref={inputFour} />

      {/*<DateContext.Provider value={date}>
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>
      </DateContext.Provider>*/}
    </div>
  );
}
