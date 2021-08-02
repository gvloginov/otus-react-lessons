import React from "react";
import { action } from "@storybook/addon-actions";
import { CellItem } from "./CellItem";
import {ComponentMeta, ComponentStory, Meta, Story} from "@storybook/react";

export default {
  title: "UI/CellItem",
  component: CellItem,
  argTypes: {
    backgroundColor: { control: 'color' },
    className: {
      options: ['baseCell', 'baseCellOn'],
      control: { type: 'radio' }
    }
  },  
} as ComponentMeta<typeof CellItem>;

const Template: ComponentStory<typeof CellItem> = (args) => <CellItem  {...args} />;

export const CellItemDefault = Template.bind({});
CellItemDefault.args = {
  className: 'baseCell',
  cellId: '1 + 1',
  x: 1,
  y: 1
};

export const CellItemOn = Template.bind({});
CellItemOn.args = {
  className: 'baseCellOn',
  cellId: '5 + 1',
  x: 5,
  y: 1
};



