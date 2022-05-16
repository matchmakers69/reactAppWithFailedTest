import { useEffect, useState } from "react";
import ViewContactDetails from "./ViewContactDetails";
import EditContactDetails from "./EditContactDetails";
import { Box, Grid, Typography } from "@mui/material";
import { IMemberApi, MemberAddress, MemberApiClient } from "services/api/MemberApiClient";
import { useAppSelector } from "store/hooks/useAppSelector";

const memberApiClient: IMemberApi = MemberApiClient();

const ContactDetailsPanel = () => {
  const [contactDetailsInView, setContactDetailsInView] = useState(true);

  const { awsDetails } = useAppSelector((state) => state.userState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [contactAddress, setContactAddress] = useState<MemberAddress | null>(null);

  useEffect(() => {
    if (!awsDetails) {
      return;
    }
    let mounted = true;
    const abortController = new AbortController();
    const signal = abortController.signal;
    if (mounted) {
      const fetchAddressDetails = async () => {
        try {
          setLoading(true);
          console.log("memberApiClient", memberApiClient.getContactAddress);
          const response = await memberApiClient.getContactAddress(awsDetails?.memberRef);

          console.log("frwvgfre...", response);
          setContactAddress(response);
        } catch (err) {
          if (!signal.aborted) {
            setError(true);
          }
        } finally {
          if (!signal.aborted) {
            setLoading(false);
          }
        }
      };
      fetchAddressDetails();
    }

    return () => {
      mounted = false;
      abortController.abort();
    };
  }, [awsDetails, awsDetails?.memberRef]);

  const handleSaveAndUpdateAddressDetails = async (newAddress: MemberAddress) => {
    if (!awsDetails) {
      return;
    }

    try {
      setLoading(true);
      await memberApiClient.postContactAddress(awsDetails?.memberRef, newAddress);
      setContactAddress(newAddress);
    } catch (err) {
      console.warn("Cannot update member address", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleContactDetailsMode = () => {
    setContactDetailsInView(!contactDetailsInView);
  };

  if (loading) return <span>Contact details are loading...</span>;
  if (error || !contactAddress) return <span>Sorry no data for contact details</span>;

  return (
    <Box sx={{ pb: { xs: 5, lg: 7 }, pt: { xs: 3, lg: 4 } }}>
      <Grid
        container
        columnSpacing={{
          xs: 1,
          md: 1,
        }}
      >
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Box sx={{ mb: { xs: 3, lg: 7 } }}>
              <Typography variant="h2" component="h2">
                Contact details
              </Typography>
            </Box>
          </Grid>
          {contactDetailsInView ? (
            <ViewContactDetails
              contactDetails={contactAddress}
              onToggleMode={handleToggleContactDetailsMode}
            />
          ) : (
            <EditContactDetails
              contactDetails={contactAddress}
              onToggleMode={handleToggleContactDetailsMode}
              onSaveAndUpdateContactAddress={handleSaveAndUpdateAddressDetails}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactDetailsPanel;
