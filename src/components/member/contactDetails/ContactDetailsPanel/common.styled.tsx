import { styled } from "@mui/material/styles";
import { shouldForwardProp } from "@mui/system";

type ContactDetailsFormProps = {
  isFlexStart?: boolean;
  noPadding?: boolean;
};

type StyledProps = Pick<ContactDetailsFormProps, "isFlexStart" | "noPadding">;

export const ContactDetailsFormContainer = styled("ul")({
  padding: 0,
  margin: 0,
  listStyle: "none",
});

export const ContactDetailsFormContainerRow = styled("li", {
  shouldForwardProp: (prop: PropertyKey) => shouldForwardProp(prop) && prop !== "isFlexStart",
})<StyledProps>(({ isFlexStart }) => ({
  lineHeight: "1",
  display: "flex",
  alignItems: isFlexStart ? "flex-start" : "center",
  justifyContent: "space-between",
  width: "100%",
  flexWrap: "wrap",
  marginBottom: 32,
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const ContactDetailsFormLabelWrapper = styled("div", {
  shouldForwardProp: (prop: PropertyKey) => shouldForwardProp(prop) && prop !== "noPadding",
})<StyledProps>(({ noPadding, theme }) => ({
  width: "100%",
  padding: noPadding ? 0 : "18px 0 5px 0",
  [theme.breakpoints.up("md")]: {
    width: "30%",
  },
}));

export const ContactDetailsFormInputWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
}));
