import React from "react";
import ReactDOM from "react-dom/client";
import {Greetings} from './Greetings';
import Product from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<><Greetings /> <Product/></>);
