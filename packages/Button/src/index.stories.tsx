import React from "react";
import type { Meta, StoryObj } from "@storybook/preact";
import * as Component from ".";
console.log(Component);

type Story = StoryObj<Component.Props>;

const meta: Meta<Component.Props> = {
  title: "Button",
  render: (args) => <x-button {...args}></x-button>,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    onClick: () => {
      console.log("Clicked by Storybook !!");
    },
  },
};
