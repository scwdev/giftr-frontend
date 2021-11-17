import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const List = (props) => {
  const params = useParams();

  const [token, setToken] = useState({});
  const [family, setFamily] = useState({});
  // get items filtered by group
  const getItems = async (id) => {
    // need group identifier, group id?
    try {
      const filteredItems = await fetch(
        "https://giftr-back.herokuapp.com/item/"
      );
      const parsedItems = await filteredItems.json();
    } catch (err) {
      console.log(err);
    }
  };

  // const getFam = async (id) => {
  //   try {
  //     const fam = await fetch("https://giftr-back.herokuapp.com/group/" + id);
  //     const parsedFam = await fam.json();
  //     setFamily(parsedFam);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getFam(params.id);
  // }, []);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h1>List</h1>
      <p></p>
    </div>
  );
};
export default List;
