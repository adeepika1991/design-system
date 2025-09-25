// .storybook/preview.tsx
import type { Preview } from "@storybook/nextjs-vite";
import React from "react";
import "../src/app/globals.css";
import { ThemeProvider } from "../src/providers/ThemeProvider";
import { withThemeByClassName } from "@storybook/addon-themes";

// Wrap every story with ThemeProvider + Tailwind dark mode decorator
export const decorators = [
  (Story: React.FC) => (
    <ThemeProvider>
      <div className="min-h-screen">
        <Story />
      </div>
    </ThemeProvider>
  ),
  withThemeByClassName({
    themes: { light: "light", dark: "dark" },
    defaultTheme: "light",
  }),
];

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: "todo" },
  },
};

export default preview;
