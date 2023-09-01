import { createContext, h } from "preact";
import { useContext } from "preact/hooks";
import { setup } from "goober";
// @ts-expect-error
import { prefix } from "goober/prefixer";
import { theme } from "./light";

declare module "goober" {
  export interface DefaultTheme {
    colors: {
      primary: string;
    };
  }
}

const ThemeContext = createContext(theme);
const useTheme = () => useContext(ThemeContext);

let isCalled = false;

export const initTheme = () => {
  if (isCalled) return;
  setup(h, prefix, useTheme);
  isCalled = true;
};

export type { DefaultTheme } from "goober";
export { styled } from "goober";
