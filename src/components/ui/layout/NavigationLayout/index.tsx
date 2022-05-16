import { Outlet } from "react-router-dom";
import { AlertMessages } from "../../../alerts/AlertMessages";
import Container from "../../Container";
import NavigationHeaderButtons from "./NavigationHeaderButtons";
import * as S from "./NavigationLayout.styled";

const AuthLayout = () => {
  return (
    <>
      <S.Header sx={{ mb: 2 }}>
        <NavigationHeaderButtons />
      </S.Header>
      <AlertMessages />
      <Container hasPadding>
        <Outlet />
      </Container>
    </>
  );
};

export default AuthLayout;
