import { Grid } from "@mui/material";
import AuthFormHeroIconColumn from "components/auth/AuthFormHeroIconColumn";
import AuthFormHeroIcon from "components/auth/AuthFormHeroIconColumn/AuthFormHeroIcon";

type AwsHeroIconProps = {
  alt: string;
  src: string;
};

const AwsHeroIcon = ({ alt, src }: AwsHeroIconProps) => {
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
      <AuthFormHeroIconColumn dragToBottom icon={<AuthFormHeroIcon src={src} alt={alt} />} />
    </Grid>
  );
};

export default AwsHeroIcon;
