import { render } from "./lb/react-dom.js";
import App from "./components/app.js";

const container = document.querySelector("#root");

render(new App(), container);
