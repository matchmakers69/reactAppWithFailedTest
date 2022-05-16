import { ReactNode } from "react";
import * as S from "./DashboardChartCircle.styled";

type DashboardChartCircleProps = {
  icon: ReactNode;
};

const DashboardChartCircle = ({ icon }: DashboardChartCircleProps) => {
  const HalfCircle = icon && (
    <S.DashboardChartImageWrapper className="icon-link">{icon}</S.DashboardChartImageWrapper>
  );
  return <>{HalfCircle}</>;
};

export default DashboardChartCircle;
