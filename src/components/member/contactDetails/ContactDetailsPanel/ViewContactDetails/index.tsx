import EditIcon from "@mui/icons-material/Edit";
import { Box, Grid, InputBase, Typography } from "@mui/material";
import Button from "components/ui/Button";
import { MemberAddress } from "services/api/MemberApiClient";
import * as S from "../common.styled";

type ViewContactDetailsProps = {
  onToggleMode: () => void;
  contactDetails: MemberAddress;
};

const optionalAddressLine = (s: string | undefined) => (s ? `\n${s}` : "");

const ViewContactDetails = ({ onToggleMode, contactDetails }: ViewContactDetailsProps) => {
  const multilineAddress = `${contactDetails.line1 ?? ""}${optionalAddressLine(
    contactDetails.line2,
  )}${optionalAddressLine(contactDetails.line3)}${optionalAddressLine(
    contactDetails.line4,
  )}${optionalAddressLine(contactDetails.line5)}${optionalAddressLine(contactDetails.postcode)}`;

  return (
    <>
      <Grid container>
        <Grid item md={8}>
          <Grid container>
            <Grid item xs={12}>
              <S.ContactDetailsFormContainer>
                <S.ContactDetailsFormContainerRow>
                  <S.ContactDetailsFormLabelWrapper noPadding>
                    <Typography component="h4" variant="h4">
                      Phone Number
                    </Typography>
                  </S.ContactDetailsFormLabelWrapper>

                  <S.ContactDetailsFormInputWrapper>
                    <InputBase
                      fullWidth
                      value={contactDetails.phoneNumber ?? ""}
                      inputProps={{ readOnly: true }}
                    />
                  </S.ContactDetailsFormInputWrapper>
                </S.ContactDetailsFormContainerRow>

                <S.ContactDetailsFormContainerRow>
                  <S.ContactDetailsFormLabelWrapper noPadding>
                    <Typography component="h4" variant="h4">
                      Email Address
                    </Typography>
                  </S.ContactDetailsFormLabelWrapper>

                  <S.ContactDetailsFormInputWrapper>
                    <InputBase
                      fullWidth
                      value={contactDetails.email ?? ""}
                      inputProps={{ readOnly: true }}
                    />
                  </S.ContactDetailsFormInputWrapper>
                </S.ContactDetailsFormContainerRow>

                <S.ContactDetailsFormContainerRow isFlexStart>
                  <S.ContactDetailsFormLabelWrapper noPadding>
                    <Typography component="h4" variant="h4">
                      Address
                    </Typography>
                  </S.ContactDetailsFormLabelWrapper>

                  <S.ContactDetailsFormInputWrapper>
                    <InputBase
                      fullWidth
                      multiline
                      rows={6}
                      value={multilineAddress ?? ""}
                      inputProps={{ readOnly: true, border: "none" }}
                    />
                  </S.ContactDetailsFormInputWrapper>
                </S.ContactDetailsFormContainerRow>
              </S.ContactDetailsFormContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sx={{ display: { xs: "none", sm: "flex" } }} />
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              pt: {
                xs: 7,
                lg: 8,
              },
            }}
          >
            <Button
              sx={{
                width: "300px",
              }}
              startIcon={<EditIcon />}
              variant="outlined"
              onClick={() => onToggleMode()}
              type="button"
            >
              Edit contact details
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewContactDetails;
