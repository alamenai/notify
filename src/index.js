import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Notification from "./components/Notification";


const data = {
    title: "System updates",
    subtitle: "This is related to your OS",
    message: "Your operating system is missing some files, please reboot your PC and upgrade your system."
}

const style = {
    rounded: true,
    animation: "left2right",
    duration: 1
}

const action = {
    name: "Reboot",
    event: () => alert("Reboot")
}

const type = "warning";

const notification = { type, data, style, action };

ReactDOM.render(
    <React.StrictMode>
        <Notification {...notification} darkmode />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();