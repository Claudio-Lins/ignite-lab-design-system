import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimpleOpen } from "phosphor-react";
import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
} from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimpleOpen />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Enter your email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
export const WhitoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Enter your email" />
  }
};
