import PersonalInformation from "components/member/contactDetails/PersonalInformation";
import MemberDetails from "components/member/contactDetails/MemberDetails";
import ContactDetailsPanel from "components/member/contactDetails/ContactDetailsPanel";
import useFetchUser from "features/user/hooks/useFetchUser";
import ContactDetailsFooter from "components/member/contactDetails/ContactDetailsFooter";

const MemberContactDetails = () => {
  const { loading } = useFetchUser();
  if (loading === "pending") return <span>Loading contact details...</span>; // TODO - add loader here
  return (
    <>
      <MemberDetails />
      <PersonalInformation />
      <ContactDetailsPanel />
      <ContactDetailsFooter />
    </>
  );
};

export default MemberContactDetails;
