import {Meta, Story} from "@storybook/react";
import React from "react";
import { Select, LevelProps } from './index';

export default {
    title: 'Select',
    component: Select
}as Meta;

const Template: Story<LevelProps> = (args) => <Select {... args} />

export const SelectStor = Template.bind({});
SelectStor.args = {
    optionNames: ["admin","user","maintainer"]
}