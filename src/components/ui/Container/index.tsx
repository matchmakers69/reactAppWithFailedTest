import { BaseProps } from "utils/GenericTypes/BaseProps";

import * as S from "./Container.styled";
type ContainerProps = {
  hasPadding?: boolean;
} & BaseProps;

export type StyledProps = Pick<ContainerProps, "hasPadding">;

const Container = ({ hasPadding = false, children }: ContainerProps) => {
  return <S.Container hasPadding={hasPadding}>{children}</S.Container>;
};

export default Container;
