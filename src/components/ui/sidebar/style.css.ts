import { style } from "@vanilla-extract/css";
import { vars } from "../../../theme/theme.css";

export const sidebar = style({
    fontFamily: vars.fonts.heading,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: vars.colors.sideBar.background,
    width: '100%',
    maxWidth: 300,
    height: '100vh',
    paddingLeft: 10,
    paddingRight: 10,
});

export const expandSidebar = style({
    maxWidth: 300,
});

export const foldSidebar = style({
    maxWidth: 70,
});

export const logo = style({
    color: vars.colors.topBar.color,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70
});

export const foldLogo = style({
    justifyContent: "center",
});

export const hamburger = style({
    color: vars.colors.link.normal,
    ':hover': {
        color: vars.colors.link.hover
    },
    width: 25,
    height: 25
});

export const linkIcon = style({
    width: 25,
    height: 25
});

export const link = style({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: vars.fonts.heading,
    fontSize: 16,
    margin: "20px 30px 20px 30px",
    textDecoration: 'none',
    color: vars.colors.link.normal,
    ':hover': {
        color: vars.colors.link.hover
    }
});

export const activeLink = style({
    color: vars.colors.link.active,
});

export const foldLink = style({
    justifyContent: "center",
});