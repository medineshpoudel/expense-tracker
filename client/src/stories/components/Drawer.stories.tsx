/* eslint-disable react/function-component-definition */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Drawer from '../../components/layout/drawer/Drawer';

export default {
  title: 'Example/Components/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {};
