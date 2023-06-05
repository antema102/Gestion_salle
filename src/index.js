import React from "react";
import {createRoot} from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';


import Scheduler from './compoments/Scheduler/Scheduler';
import './compoments/Scheduler/Scheduler.css';
export default Scheduler;

createRoot(document.getElementById('root')).render(<App/>)