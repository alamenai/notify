import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Styled';
import Header from './Header';
import Body from './Body';
import Action from './Action';
import Media from './Media';
import WithProvider from './withProvider';
import { NOTIFICATION_TYPES } from './types';

const Notification = ({
	type,
	data,
	style,
	action,
	darkmode,
	autohide,
	children,
}) => {
	const [visible, setVisible] = React.useState(true);

	React.useEffect(() => {
		if (autohide) {
			setTimeout(() => setVisible(false), 5000);
		}
		return () => {
			clearTimeout();
		};
	}, [autohide]);

	const defaultStyle = {
		color: 'rgb(0,151,255)',
		rounded: false,
		animation: 'left2right',
		duration: 2,
	};

	const { title, subtitle, message } = data;
	const { animation, rounded, duration, color } = style || defaultStyle;
	const { name, event } = action;

	if (!NOTIFICATION_TYPES.map((t) => t.toLowerCase()).includes(type)) {
		throw new Error(type + ' is not included in notification types');
	}

	if (duration && !(typeof duration === 'number') && !Number(duration)) {
		throw new Error('duration should be a number');
	}

	return visible ? (
		<Wrapper
			type={type}
			animation={animation}
			rounded={rounded}
			color={color}
			darkmode={darkmode}
			duration={duration}
		>
			<Header title={title} subtitle={subtitle} />
			<Body message={message} />
			{children}
			<Action name={name} onClick={event} />
		</Wrapper>
	) : null;
};

Notification.propTypes = {
	type: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
	style: PropTypes.object,
	action: PropTypes.object.isRequired,
	darkmode: PropTypes.bool,
};

Notification.defaultProps = {
	type: 'info',
};

export default WithProvider(Notification);
export { Notification, Media };
