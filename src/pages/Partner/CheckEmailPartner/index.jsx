import CheckEmail from "../../../components/auth/CheckEmail";
import { USER_TYPES } from "../../../utils/constants/userTypes";

function PartnerCheckEmail() {
  return <CheckEmail userType={USER_TYPES.PARTNER} />;
}

export default PartnerCheckEmail;