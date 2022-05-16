import { ReactNode } from "react";
import * as S from "./common.styled";

type AuthFormHeroIconColumnProps = {
  icon?: ReactNode;
  dragToBottom?: boolean;
};

export type StyledProps = Pick<AuthFormHeroIconColumnProps, "dragToBottom">;

const AuthFormHeroIconColumn = ({ icon, dragToBottom = false }: AuthFormHeroIconColumnProps) => {
  return (
    <S.IconContainer dragToBottom={dragToBottom}>
      <S.ColumnImageInner>{icon}</S.ColumnImageInner>
    </S.IconContainer>
  );
};

export default AuthFormHeroIconColumn;
