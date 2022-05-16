import * as S from "../common.styled";

type IDashboardTileImageProps = {
  src: string;
  alt: string;
};

const DashboardTileImage = ({ src, alt }: IDashboardTileImageProps) => {
  return (
    <>
      <S.ImageIcon src={src} alt={alt} loading="eager" />
    </>
  );
};

export default DashboardTileImage;
