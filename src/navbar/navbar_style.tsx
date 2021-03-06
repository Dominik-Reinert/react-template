import { css } from "@emotion/react";
import { StyleContext } from "../style_context/style_context";

export const navbarStyle = (styleContext: StyleContext) => css`
  label: navbar;

  display: flex;
  width: ${styleContext.sizes.width.content};
  height: 100px;

  margin: auto;
  padding: 12px 0;

  .page-name-wrapper {
    display: flex;
    flex: 12 6 200px;

    height: 100%;
    align-items: center;
  }

  .link-wrapper {
    display: flex;
    flex: 1 2 300px;
    font-size: ${styleContext.sizes.font.text};

    height: 100%;
    align-items: center;

    margin-top: 8px;
  }

  .page-name {
    font-size: ${styleContext.sizes.font.subHeadline};
    margin: 16px 16px 14px;
    color: ${styleContext.shades.text};
  }
`;
