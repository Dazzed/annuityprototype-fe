import React, { useEffect, useState } from "react";
import axios from "axios";

export default function cats() {
  let [catList, setCatList] = useState([
    { id: 1, name: "Kitty", breed: "something" },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:3000/cats`);
        setCatList(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {catList.map((cat) => (
        <tr key={cat.id}>
          <td>{cat.name}</td>
          <td>{cat.age}</td>
          <td>{cat.breed}</td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      ))}
    </>
  );
}
