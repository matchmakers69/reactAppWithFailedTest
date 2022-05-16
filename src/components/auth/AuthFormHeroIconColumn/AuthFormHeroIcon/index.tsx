type AuthFormHeroIconProps = {
  alt: string;
  src: string;
};

const AuthFormHeroIcon = ({ alt, src }: AuthFormHeroIconProps) => {
  return (
    <>
      <img style={{ maxWidth: "100%", height: "auto" }} src={src} alt={alt} loading="lazy" />
    </>
  );
};

export default AuthFormHeroIcon;
