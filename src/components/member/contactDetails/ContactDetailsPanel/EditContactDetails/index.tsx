import { Box, Grid, Typography } from "@mui/material";
import Button from "components/ui/Button";
import { SubmitHandler, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { contactDetailsSchema } from "./validationSchema";
import TextField from "components/ui/FormElements/TextField";
import * as S from "../common.styled";
import { MemberAddress } from "services/api/MemberApiClient";

const booleanValue = (value: boolean | undefined) => value || false;

// TODO - Add saveContactAddress() feedback, eg. alerts

type FormData = {
  phoneNumber: string;
  emailAddress: string;
  postCode: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  postcode: string;
};

type EditContactDetailsProps = {
  onToggleMode: () => void;
  contactDetails: MemberAddress;
  onSaveAndUpdateContactAddress: (newAddress: MemberAddress) => {};
};

const EditContactDetails = ({
  onToggleMode,
  contactDetails,
  onSaveAndUpdateContactAddress,
}: EditContactDetailsProps) => {
  const methods = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(contactDetailsSchema),
  });

  const handleCancelContactFormEditMode = () => {
    onToggleMode();
  };

  const formSubmitHandler: SubmitHandler<FormData> = ({
    line1,
    line2,
    line3,
    line4,
    line5,
    postCode,
    phoneNumber,
    emailAddress,
  }: FormData) => {
    onSaveAndUpdateContactAddress({
      line1: String(line1),
      line2: String(line2),
      line3: String(line3),
      line4: String(line4),
      line5: String(line5),
      postcode: String(postCode),
      phoneNumber: String(phoneNumber),
      faxNumber: String(contactDetails?.faxNumber),
      email: String(emailAddress),
      overseas: booleanValue(contactDetails?.overseas),
    });
    handleCancelContactFormEditMode();
  };

  return (
    <Grid container>
      <Grid item md={9}>
        <FormProvider {...methods}>
          <form noValidate onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <Grid container>
              <Grid item xs={12}>
                <S.ContactDetailsFormContainer>
                  <S.ContactDetailsFormContainerRow>
                    <S.ContactDetailsFormLabelWrapper>
                      <Typography component="h4" variant="h4">
                        Phone Number
                      </Typography>
                    </S.ContactDetailsFormLabelWrapper>
                    <S.ContactDetailsFormInputWrapper>
                      <TextField
                        name="phoneNumber"
                        label="Phone Number"
                        defaultValue={contactDetails.phoneNumber}
                        fullWidth
                        required
                        variant="standard"
                      />
                    </S.ContactDetailsFormInputWrapper>
                  </S.ContactDetailsFormContainerRow>

                  <S.ContactDetailsFormContainerRow>
                    <S.ContactDetailsFormLabelWrapper>
                      <Typography component="h4" variant="h4">
                        Email Address
                      </Typography>
                    </S.ContactDetailsFormLabelWrapper>
                    <S.ContactDetailsFormInputWrapper>
                      <TextField
                        name="emailAddress"
                        label="Email Address"
                        defaultValue={contactDetails.email}
                        fullWidth
                        required
                        variant="standard"
                      />
                    </S.ContactDetailsFormInputWrapper>
                  </S.ContactDetailsFormContainerRow>

                  <S.ContactDetailsFormContainerRow isFlexStart>
                    <S.ContactDetailsFormLabelWrapper>
                      <Typography component="h4" variant="h4">
                        Address
                      </Typography>
                    </S.ContactDetailsFormLabelWrapper>
                    <S.ContactDetailsFormInputWrapper>
                      <Box sx={{ mb: 2 }}>
                        <TextField
                          name="line1"
                          label="Line 1"
                          defaultValue={contactDetails.line1}
                          fullWidth
                          required
                          variant="standard"
                        />
                      </Box>
                      <Box sx={{ mb: 1 }}>
                        <TextField
                          name="line2"
                          label="Line 2"
                          defaultValue={contactDetails.line2}
                          fullWidth
                          variant="standard"
                        />
                      </Box>
                      <Box sx={{ mb: 1 }}>
                        <TextField
                          name="line3"
                          label="Line 3"
                          defaultValue={contactDetails.line3}
                          fullWidth
                          variant="standard"
                        />
                      </Box>
                      <Box sx={{ mb: 1 }}>
                        <TextField
                          name="line4"
                          label="Line 4"
                          defaultValue={contactDetails.line4}
                          fullWidth
                          variant="standard"
                        />
                      </Box>
                      <Box sx={{ mb: 1 }}>
                        <TextField
                          name="line5"
                          label="Line 5"
                          defaultValue={contactDetails.line5}
                          fullWidth
                          variant="standard"
                        />
                      </Box>
                      <Box sx={{ mb: 1 }}>
                        <TextField
                          name="postCode"
                          label="Post Code"
                          defaultValue={contactDetails.postcode}
                          fullWidth
                          required
                          variant="standard"
                        />
                      </Box>
                    </S.ContactDetailsFormInputWrapper>
                  </S.ContactDetailsFormContainerRow>
                  <S.ContactDetailsFormContainerRow>
                    <S.ContactDetailsFormLabelWrapper />
                    <S.ContactDetailsFormInputWrapper>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: {
                            xs: "wrap",
                            sm: "nowrap",
                          },
                          alignItems: "center",
                        }}
                      >
                        <Button
                          sx={{
                            width: "250px",
                            mb: {
                              xs: 4,
                              sm: 0,
                            },
                          }}
                          variant="primary"
                          isDisabled={!methods.formState.isValid}
                          type="submit"
                        >
                          Save changes
                        </Button>

                        <Button
                          sx={{
                            width: "250px",
                          }}
                          variant="outlined"
                          onClick={handleCancelContactFormEditMode}
                          type="button"
                        >
                          Cancel
                        </Button>
                      </Box>
                    </S.ContactDetailsFormInputWrapper>
                  </S.ContactDetailsFormContainerRow>
                </S.ContactDetailsFormContainer>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
      <Grid item md={3} sx={{ display: { xs: "none", sm: "flex" } }} />
    </Grid>
  );
};

export default EditContactDetails;
