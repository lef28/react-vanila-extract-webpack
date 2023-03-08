import { style } from "@vanilla-extract/css";

export const root = style({
    display: 'flex',
});

export const outlet = style({
    paddingTop: 70,
    width: '100%',
    height: 'calc(100vh - 70px)',
});