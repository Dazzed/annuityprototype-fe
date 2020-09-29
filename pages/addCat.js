import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";
import styles from "../styles/Home.module.css";

export default function AddCat() {
  let [name, setName] = useState("");
  let [age, setAge] = useState(1);
  let [breed, setBreed] = useState("");

  const onSubmit = async () => {
    try {
      await axios.post(`http://localhost:3000/cats`, { name, age, breed });
      Router.reload(window.location.pathname);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.forminput}
          />
        </td>
        <td>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={styles.forminput}
          />
        </td>
        <td>
          <input
            type="text"
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className={styles.forminput}
          />
        </td>
        <td>
          <button onClick={onSubmit} className={styles.tablebutton}>Create</button>
        </td>
      </tr>
    </>
  );
}
