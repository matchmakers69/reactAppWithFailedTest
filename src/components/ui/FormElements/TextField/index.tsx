import { InputBaseComponentProps } from "@mui/material";
import { SxProps } from "@mui/system";
import { useFormContext } from "react-hook-form";
import * as S from "./TextField.styled";

type TextFieldVariants = "outlined" | "filled" | "standard";
type InputSize = "small" | "medium" | undefined;

export type TextFieldProps = {
  className?: string;
  label?: string;
  name: string;
  sx?: SxProps;
  required?: boolean;
  defaultValue?: string | undefined;
  isBackgroundTransparent?: boolean;
  variant?: TextFieldVariants;
  fullWidth?: boolean;
  size?: InputSize;
  inputProps?: InputBaseComponentProps;
};

export type StyledProps = Pick<TextFieldProps, "variant" | "isBackgroundTransparent">;

const TextField = ({
  className,
  label = "",
  name,
  sx,
  isBackgroundTransparent = false,
  required,
  defaultValue,
  variant,
  fullWidth,
  size,
  inputProps,
}: TextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <S.TextField
        {...register(name)}
        type={"text"}
        className={className}
        label={label}
        defaultValue={defaultValue}
        fullWidth={fullWidth}
        isBackgroundTransparent={isBackgroundTransparent}
        required={required}
        sx={sx}
        variant={variant}
        error={!!errors[name]}
        helperText={errors[name]?.message ?? ""}
        inputProps={inputProps}
        size={size}
      />
    </>
  );
};

export default TextField;
