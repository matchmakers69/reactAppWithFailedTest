import { forwardRef, MouseEvent, ReactNode } from "react";
import { ButtonUnstyledProps } from "@mui/base/ButtonUnstyled";
import { BaseProps } from "utils/GenericTypes/BaseProps";
import * as S from "./Button.styled";

type ButtonVariants = "error" | "primary" | "secondary" | "outlined" | "text";
type ButtonTypes = "button" | "reset" | "submit";
type ComponentTypes = "a" | "button";

export type ButtonProps = {
  component?: ComponentTypes;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  to?: string;
  type?: ButtonTypes;
  variant?: ButtonVariants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & BaseProps<string | ReactNode>;

export type StyledProps = Pick<ButtonProps, "isFullWidth" | "variant"> & ButtonUnstyledProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    component = "button",
    isDisabled = false,
    isFullWidth = false,
    to,
    type = "button",
    variant = "primary",
    onClick,
    children,
    sx,
    id,
    "data-testid": dataTestId,
    startIcon,
    endIcon,
  },
  ref,
) {
  return (
    <>
      <S.Button
        as={component}
        data-testid={dataTestId}
        disabled={isDisabled}
        type={component === "button" ? type : undefined}
        variant={variant}
        isFullWidth={isFullWidth}
        ref={ref}
        sx={sx}
        id={id}
        onClick={onClick}
        href={component === "a" ? to : undefined}
      >
        {startIcon && <S.IconLeftWrapper>{startIcon}</S.IconLeftWrapper>}
        {children}
        {endIcon && <S.IconRightWrapper>{endIcon}</S.IconRightWrapper>}
      </S.Button>
    </>
  );
});

export default Button;
