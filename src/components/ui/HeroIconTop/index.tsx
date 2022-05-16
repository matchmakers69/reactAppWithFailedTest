import { ReactNode } from "react";
import * as S from "./HeroIconTop.styled";

type HeroIconTopProps = {
  icon?: ReactNode;
  dragToBottom?: boolean;
  alt: string;
  src: string;
};

export type StyledProps = Pick<HeroIconTopProps, "dragToBottom">;

const HeroIconTop = ({ alt, src, dragToBottom }: HeroIconTopProps) => {
  return (
    <S.IconContainer dragToBottom={dragToBottom}>
      <S.IconImg src={src} alt={alt} />
    </S.IconContainer>
  );
};

export default HeroIconTop;
