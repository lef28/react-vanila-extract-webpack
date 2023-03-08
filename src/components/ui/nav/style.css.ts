import { style } from "@vanilla-extract/css";
import { vars } from "../../../theme/theme.css";

export const nav = style({
    fontFamily: vars.fonts.heading,
    backgroundColor: vars.colors.topBar.background,
    color: vars.colors.topBar.color,
    width: '100%',
    height: 70,
    position: "fixed",
    zIndex: -1
});