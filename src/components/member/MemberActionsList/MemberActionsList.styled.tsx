import { styled } from "@mui/material/styles";

export const MemberActionsList = styled("ul")({
  padding: 0,
  margin: 0,
  listStyle: "none",
});

export const MemberActionsListItem = styled("li")(({ theme }) => ({
  lineHeight: "1.2",
  paddingLeft: 8,
  textIndent: "-5px",

  "&:before": {
    content: "'• '",
    fontSize: 25,
    display: "inline-block",
    color: theme.palette.primary.light,
    fontWeight: 700,
    width: 10,
  },
  "&:last-child": {
    marginBottom: 0,
  },
}));
