// src/components/ThemeTester.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Header from "./Header";

//👇 This default export determines where your story goes in the story list
const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};

// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
