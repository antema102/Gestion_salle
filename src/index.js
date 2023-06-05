import React from "react";
import {createRoot} from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-big-scheduler/lib/css/style.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-scheduler/lib/css/style.css";
import 'react-calendar/dist/Calendar.css'
import App from './App';


createRoot(document.getElementById('root')).render(<App/>)