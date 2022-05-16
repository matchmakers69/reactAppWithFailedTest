import { Box, Grid } from "@mui/material";
import { HalfCircleIcon } from "components/ui/Svg";
import * as S from "components/dashboard/common.styled";
import DashboardLessons from "components/dashboard/DashboardLessons";
import DashboardTools from "components/dashboard/DashboardTools";
import DashboardChartCircle from "components/dashboard/DashboardChartCircle";
import HeroHeaderText from "components/member/HeroHeaderText";
import PageHeader from "components/ui/PageHeader";
import useFetchUser from "features/user/hooks/useFetchUser";

const Dashboard = () => {
  const { loading, memberDetails } = useFetchUser();
  const forename = memberDetails?.forenames.split(" ")[0] ?? "";
  const dashboardPageTitle = `${forename}'s pension dashboard`;
  if (loading === "pending") return <span>Loading user data...</span>; // TODO - add loader here

  return (
    <>
      <S.DashboardHeaderSection data-testid="dashboard-section">
        <Grid container>
          <Grid item xs={12}>
            <PageHeader sx={{ color: "text.secondary" }} title={dashboardPageTitle} />
          </Grid>
        </Grid>
        <Grid
          container
          columnSpacing={{
            xs: 2,
            sm: 3,
            lg: 10,
            xl: 12,
          }}
        >
          <Grid item xs={12} md={6} lg={7} xl={8} order={{ xs: 2, sm: 2, md: 1 }}>
            <HeroHeaderText />
          </Grid>

          <Grid item xs={12} md={6} lg={5} xl={4} order={{ xs: 1, sm: 1, md: 2 }}>
            <Box
              sx={{
                mb: { xs: 3, md: 0 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <DashboardChartCircle icon={<HalfCircleIcon className="half-circle" />} />
            </Box>
          </Grid>
        </Grid>
      </S.DashboardHeaderSection>

      <S.DashboardSection>
        <DashboardTools />
      </S.DashboardSection>
      <S.DashboardSection>
        <DashboardLessons />
      </S.DashboardSection>
    </>
  );
};

export default Dashboard;
