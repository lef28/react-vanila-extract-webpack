import { style } from "@vanilla-extract/css";
import { vars } from "../../../../theme/theme.css";

export const root = style({
    fontFamily: vars.fonts.body,
    background: vars.colors.page1.right.background,
    color: vars.colors.page1.right.color,
    width: '50%',
    height: 'calc(100% - 100px)',
    padding: 50,
    overflow: 'auto'
});