import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import Wishlist from "./Wishlist";

const List = (props) => {
  const params = useParams();
  //token is stored at props.authN.token
  const [family, setFamily] = useState(props.authN);
  console.log(family);

  // get items filtered by group
  const getItems = async (id) => {
    // need group identifier, group id?
    console.log(`bearer ${props.authN.token}`);
    try {
      const configs = {
        headers: {
          authorization: `bearer ${props.authN.token}`,
        },
      };
      const filteredItems = await fetch(
        "https://giftr-back.herokuapp.com/item/",
        configs
      );
      const parsedItems = await filteredItems.json();
      console.log(parsedItems);
    } catch (err) {
      console.log(err);
    }
  };

  const testItems = [
    {
      groupName: "firstGroup",
      title: "Tickle me elmo",
      description: "hot toy from the 90s",
      imgUrl: "www",
      url: "www",
      requester: "Jared",
      purchased: "Jared",
      price: "9999",
    },
    {
      groupName: "firstGroup",
      title: "Socks",
      requester: "Jared",
    },
    {
      groupName: "firstGroup",
      title: "Bike",
      requester: "Jared",
    },
    {
      groupName: "secondGroup",
      title: "Coal",
      requester: "Joe Mama",
    },
    {
      groupName: "secondGroup",
      title: "2 Turtle Doves",
      requester: "J",
    },
    {
      groupName: "secondGroup",
      title: "Partridge",
      requester: "Santa",
    },
    {
      groupName: "lastGroup",
      title: "New balance sneakers",
      requester: "grandpa",
    },
    {
      groupName: "lastGroup",
      title: "shirt",
      requester: "grandpa",
    },
    {
      groupName: "lastGroup",
      title: "blanquet",
      requester: "grandpa",
    },
  ];

  const addItem = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const addedItem = await fetch("https://giftr-back.herokuapp.com/item/");
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

  // useEffect(() => {
  //   getItems(family._id);
  // }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Wishlist</h1>
      <Container>
        <Wishlist />
      </Container>
    </div>
  );
};
export default List;
