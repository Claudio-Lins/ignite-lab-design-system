import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from './Heading';

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Heading",
    size: 'md',
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
export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading</h1>,
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
