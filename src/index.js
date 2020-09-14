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
    color: 'rgb(150,5,255)',
    rounded: true,
    animation: "bottom2up",
    duration: 1
}

const action = {
    name: "Reboot",
    event: () => alert("Reboot")
}

const notification = { data, style, action };

document.title = "React Push Notify 0.2.0";

ReactDOM.render(
    <React.StrictMode>
        <Notification {...notification} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();