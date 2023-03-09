export const props = {
	data: {
		title: 'System updates',
		subtitle: 'This is related to your OS',
		message:
			'Your operating system is missing some files, please reboot your PC and upgrade your system.',
	},

	style: {
		color: 'rgb(150,5,255)',
		rounded: true,
		animation: 'bottom2up',
		duration: 1,
	},

	action: {
		name: 'Reboot',
		event: () => alert('Reboot'),
	},
};
