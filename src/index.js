import ReactDOM from "react-dom";
import { App } from "./App";

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

console.log({ Document, Page, StyleSheet, Text, View });

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
