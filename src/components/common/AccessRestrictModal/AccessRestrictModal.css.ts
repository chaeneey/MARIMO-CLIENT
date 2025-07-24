import { style } from "@vanilla-extract/css";

import { flexGenerator } from "@styles/generator.css";
import { vars } from "@styles/theme.css";

export const modalContainer = style([
    flexGenerator('column'),
    {
        width: "29rem",
        borderRadius: '10px',
        padding: '3.2rem 4.5rem',
        backgroundColor: vars.colors.white,
    }])

export const h1Style = style([
    vars.fonts.mh2_head02_18_sb,
    {
        color: vars.colors.black,
        marginBottom: '1.4rem',
    }])

export const spanStyle = style([
    vars.fonts.mc2_cation02_12_re,
    {
        color: vars.colors.gray04,
}])

export const buttonStyle = style({
    width: '100%',
    marginTop: '2rem',
})