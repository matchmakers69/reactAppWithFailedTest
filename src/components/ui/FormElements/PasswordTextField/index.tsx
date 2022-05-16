import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, InputBaseComponentProps } from "@mui/material";
import { SxProps } from "@mui/system";
import { useFormContext } from "react-hook-form";
import * as S from "./PasswordField.styled";

type PasswordFieldVariants = "outlined" | "filled" | "standard";
type InputSize = "small" | "medium" | undefined;

export type PasswordTextFieldProps = {
  className?: string;
  label?: string;
  name: string;
  inputProps?: InputBaseComponentProps;
  sx?: SxProps;
  required?: boolean;
  defaultValue?: string | undefined;
  isBackgroundTransparent?: boolean;
  variant?: PasswordFieldVariants;
  fullWidth?: boolean;
  size?: InputSize;
};

export type StyledProps = Pick<PasswordTextFieldProps, "variant" | "isBackgroundTransparent">;

const PasswordTextField = ({
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
  inputProps = { "data-testid": "password" },
}: PasswordTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <S.TextField
        {...register(name)}
        type={showPassword ? "text" : "password"}
        className={className}
        label={label}
        defaultValue={defaultValue}
        fullWidth={fullWidth}
        required={required}
        sx={sx}
        error={!!errors[name]}
        helperText={errors[name]?.message ?? ""}
        inputProps={inputProps}
        size={size}
        isBackgroundTransparent={isBackgroundTransparent}
        variant={variant}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff sx={{ color: "primary.main", fontSize: { xs: 20, md: 30 } }} />
                ) : (
                  <Visibility sx={{ color: "primary.main", fontSize: { xs: 20, md: 30 } }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default PasswordTextField;
