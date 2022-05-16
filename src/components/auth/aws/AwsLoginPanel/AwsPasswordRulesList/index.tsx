import { useFormContext } from "react-hook-form";
import * as S from "./AwsPasswordRulesList.styled";

const includesDigits = (value: string) => /[0-9]+/.test(value);

const includesUpperCase = (value: string) => /[A-Z]+/.test(value);

const includesLowerCase = (value: string) => /[a-z]+/.test(value);

const includesSymbols = (value: string) => /[+=£$%^&!]+/.test(value);

const hasLength = (value: string, minLength: number) => value.trim().length >= minLength;

const minPasswordLength = 8;

const AwsPasswordRulesList = () => {
  const { watch } = useFormContext();
  const watchPassword = watch("password", "");
  return (
    <ol>
      <S.PasswordRule isError={!includesDigits(watchPassword)}>
        Contains at least 1 number
      </S.PasswordRule>
      <S.PasswordRule isError={!includesUpperCase(watchPassword)}>
        Contains at least 1 uppercase letter
      </S.PasswordRule>
      <S.PasswordRule isError={!includesLowerCase(watchPassword)}>
        Contains at least 1 lowercase letter
      </S.PasswordRule>
      <S.PasswordRule isError={!includesSymbols(watchPassword)}>
        Contains at least 1 special character ([+ = £ $ % ^ & !)
      </S.PasswordRule>
      <S.PasswordRule isError={!hasLength(watchPassword, minPasswordLength)}>
        At least {minPasswordLength} characters
      </S.PasswordRule>
    </ol>
  );
};

export default AwsPasswordRulesList;
