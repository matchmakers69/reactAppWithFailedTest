import { Box, Grid, Typography } from "@mui/material";

import contactDetailsImage from "assets/images/contact-details.png";
import MemberActionsList from "components/member/MemberActionsList";
import { memberActionsList } from "components/member/MemberActionsList/services/membersActionsList.service";
import PageHeader from "components/ui/PageHeader";
import HeroIconTop from "components/ui/HeroIconTop";
import * as S from "./MemberDetails.styled";

const MemberDetails = () => {
  return (
    <S.MemberDetailsSection>
      <Grid container>
        <Grid item xs={12} md={7} lg={8} xl={6}>
          <PageHeader sx={{ color: "text.secondary" }} title="Your details" />
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={{
          xs: 2,
          sm: 3,
          lg: 8,
          xl: 8,
        }}
      >
        <Grid item xs={12} md={7} lg={7} xl={8} order={{ xs: 2, sm: 2, md: 1 }}>
          <Box sx={{ mb: 5 }}>
            <Typography component="p" variant="caption">
              This is what we know about you, please always keep it updated and make sure you
              details are correct.
            </Typography>
          </Box>
          <MemberActionsList memberActionsList={memberActionsList} />
        </Grid>

        <Grid item xs={12} md={5} lg={5} xl={4} order={{ xs: 1, sm: 1, md: 2 }}>
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <HeroIconTop src={contactDetailsImage} alt="Member contact details" />
          </Box>
        </Grid>
      </Grid>
    </S.MemberDetailsSection>
  );
};

export default MemberDetails;
