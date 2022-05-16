import { Typography } from "@mui/material";
import * as S from "./MemberActionsList.styled";

type MemberActionsListProps = {
  memberActionsList: Array<string>;
};

const MemberActionsList = ({ memberActionsList }: MemberActionsListProps) => {
  return (
    <>
      <Typography sx={{ marginBottom: 2 }} component="h2" variant="h2">
        Actions
      </Typography>
      <S.MemberActionsList>
        {memberActionsList.map((item) => (
          <S.MemberActionsListItem key={`item-${item.length + 1}`}>{item}</S.MemberActionsListItem>
        ))}
      </S.MemberActionsList>
    </>
  );
};

export default MemberActionsList;
