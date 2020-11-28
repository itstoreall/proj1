import throttle from "lodash.throttle";
import { v4 as uuidv4 } from 'uuid';
import createBox from "./js/create-box";
// import { add } from "./js/calc";
import * as calc from "./js/calc";
import './styles.css';

console.log(throttle);

const id = uuidv4()

document.body.appendChild(createBox(`webpack is amazing ${id}`));

// console.log(calc.add);