import "goober";

type MyTheme = {
  colors: {
    primary: string;
  };
};

declare module "goober" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyTheme {}
}
