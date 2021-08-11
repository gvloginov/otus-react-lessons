import React from "react";
import { action } from "@storybook/addon-actions";
import { Field } from "./Field";
import {ComponentMeta, ComponentStory, Meta, Story} from "@storybook/react";

export default {
    title: "UI/Field",
    component: Field,
    argTypes: {
        backgroundColor: { control: 'color' },
      },    
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field  {...args} />;

export const Field10X10 = Template.bind({});
Field10X10.args = {
    x: 10,
    y: 10
};

export const Field20X30 = Template.bind({});
Field20X30.args = {
    x: 20,
    y: 30,
};
