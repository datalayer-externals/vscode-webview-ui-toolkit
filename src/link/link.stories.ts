import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createLink, LinkArgs} from './fixtures/createLink';
import {VSCodeLink} from './index';

// Prevent tree-shaking
VSCodeLink;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Link',
	argTypes: {
		label: {control: 'text'},
		href: {control: 'text'},
		appearance: {
			control: {
				type: 'select',
				options: ['Link', 'Primary', 'Secondary', 'Install', 'Text'],
			},
		},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
	},
};

const Template = ({...args}: LinkArgs) => {
	return createLink({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Link',
	href: '#',
	appearance: 'Link',
	isDisabled: false,
	isFocused: false,
};

export const Primary: any = Template.bind({});
Primary.args = {
	...Default.args,
	appearance: 'Primary',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
	...Default.args,
	appearance: 'Secondary',
};

export const Install: any = Template.bind({});
Install.args = {
	...Default.args,
	appearance: 'Install',
};

export const Text: any = Template.bind({});
Text.args = {
	...Default.args,
	appearance: 'Text',
};