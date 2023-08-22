import React from "react";
import ReactDOM from "react-dom/client";
import { Greetings, UserCard } from "./Greetings";
import {Product} from "./Product";
import {Button} from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id:1,
    name: 'Ryan ray',
    image: 'https://robohash.org/user2'
  },
  {
    id:2,
    name: 'Gordon Hash',
    image: 'https://robohash.org/user3'
  }
]

root.render(
  <>
{users.map( (user, i) => {
  return <h1 key ={i}>{user.name} </h1>
})}
 
  </>
);
