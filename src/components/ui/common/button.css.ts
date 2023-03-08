import { style } from "@vanilla-extract/css";
import { vars } from "../../../theme/theme.css";

export const root = style({
    background: vars.colors.button.background,
    color: vars.colors.button.color,
    fontFamily: vars.fonts.body,
    marginBottom: '10px',
    ':disabled': {
        color: 'gray'
    },
    padding: '10px 20px',
    display: "block",
});