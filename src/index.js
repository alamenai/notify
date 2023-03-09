import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Notification, { Media } from './components/Notification';
import MEDIA_PATH from './assets/videos/sample_video.mp4';
import { props } from './props';

document.title = 'Notify 0.2.0';

ReactDOM.render(
	<React.StrictMode>
		<Notification {...props}>
		</Notification>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
