import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Loren ipsum",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
  },
} as Meta;

export const Default: StoryObj = {};
export const Small: StoryObj = { args: { size: "sm" } };
export const Medium: StoryObj = { args: { size: "md" } };
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Paragrafo</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
};
