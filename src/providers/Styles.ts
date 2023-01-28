import "styled-components";
import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    main: "#1e29fb",
  },
};

type TThemeColorsType = typeof theme.colors;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: TThemeColorsType;
  }
}

export const GlobalStyled = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
