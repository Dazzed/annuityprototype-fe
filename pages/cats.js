import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function cats() {
  let [catList, setCatList] = useState([
    { id: 1, name: "Kitty", breed: "something" },
  ]);

  const fetchCats = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/cats`);
      setCatList(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCat = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cats/${id}`);
      await fetchCats();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      {catList.map((cat) => (
        <tr key={cat.id} className={styles.striped}>
          <td>{cat.name}</td>
          <td>{cat.age}</td>
          <td>{cat.breed}</td>
          <td>
            <button onClick={() => deleteCat(cat.id)} className={styles.tablebutton}>Delete</button>
          </td>
        </tr>
      ))}
    </>
  );
}
