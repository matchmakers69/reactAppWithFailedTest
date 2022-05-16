import Container from "components/ui/Container";
import { Outlet } from "react-router-dom";
import { AlertMessages } from "components/alerts/AlertMessages";
import * as S from "./AuthLayout.styled";
import LoginHeaderButtons from "components/ui/LoginHeaderButtons";

const AuthLayout = () => {
  return (
    <>
      <S.Header sx={{ mb: 2 }}>
        <LoginHeaderButtons />
      </S.Header>
      <Container hasPadding>
        <AlertMessages />
        <Outlet />
      </Container>
    </>
  );
};

export default AuthLayout;
