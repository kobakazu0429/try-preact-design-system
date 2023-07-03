import React from "react";
import type { Meta, StoryObj } from "@storybook/preact";
import * as Component from ".";
console.log(Component);

type Story = StoryObj<Component.Props>;

const meta: Meta<Component.Props> = {
  title: "Modal",
  render: (args) => <x-modal {...args}></x-modal>,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
  },
};

export default meta;

export const Primary: Story = {};
