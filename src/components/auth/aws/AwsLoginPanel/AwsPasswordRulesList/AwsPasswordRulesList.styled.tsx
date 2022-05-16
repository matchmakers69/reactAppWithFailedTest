import { styled } from "@mui/material/styles";
import { shouldForwardProp } from "@mui/system";

type PasswordRuleOptions = {
  isError?: boolean;
};

type PasswordRuleProps = Pick<PasswordRuleOptions, "isError">;

export const PasswordRule = styled("li", {
  shouldForwardProp: (prop: PropertyKey) => shouldForwardProp(prop) && prop !== "isError",
})<PasswordRuleProps>(({ theme, isError }) => ({
  color: isError ? theme.palette.danger.main : theme.palette.success.main,
}));
