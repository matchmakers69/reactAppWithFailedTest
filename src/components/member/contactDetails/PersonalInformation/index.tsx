import { Box, Grid, Typography } from "@mui/material";
import * as S from "./PersonalInformation.styled";
import { useAppSelector } from "store/hooks/useAppSelector";
import { genderString } from "./service/formatGenderString";
import { dateOnlyString } from "utils/dates/formatDateToString";

const PersonalInformation = () => {
  const { memberDetails } = useAppSelector((state) => state.userState);

  return (
    <S.PersonalInformationSection>
      <Box sx={{ mb: 6 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ mb: 2 }} component="h2" variant="h2">
              Personal information
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" component="p">
              If any of this information is incorrect, please contact your fund on 0161 7894 and
              they update it for you.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container columnSpacing={{ xs: 2, sm: 3 }} rowSpacing={{ xs: 3, sm: 6, md: 8 }}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography sx={{ mb: 1 }} variant="h4" component="h4">
              Title
            </Typography>
            <Box>
              <Typography variant="subtitle2" component="p">
                {memberDetails?.title}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography sx={{ mb: 1 }} variant="h4" component="h4">
              Initials
            </Typography>
            <Box>
              <Typography variant="subtitle2" component="p">
                {memberDetails?.initials}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography sx={{ mb: 1 }} variant="h4" component="h4">
              Gender
            </Typography>
            <Box>
              <Typography variant="subtitle2" component="p">
                {genderString(memberDetails?.gender)}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography sx={{ mb: 1 }} variant="h4" component="h4">
              Date of Birth
            </Typography>
            <Box>
              <Typography>
                {dateOnlyString(memberDetails ? memberDetails?.dateOfBirth : "")}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography sx={{ mb: 1 }} variant="h4" component="h4">
              Surname
            </Typography>
            <Box>
              <Typography>{memberDetails?.surname}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography sx={{ mb: 1 }} variant="h4" component="h4">
              Forenames
            </Typography>
            <Box>
              <Typography>{memberDetails?.forenames}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography sx={{ mb: 1 }} variant="h4" component="h4">
              NI Number
            </Typography>
            <Box>
              <Typography>{memberDetails?.niNumber}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </S.PersonalInformationSection>
  );
};

export default PersonalInformation;
