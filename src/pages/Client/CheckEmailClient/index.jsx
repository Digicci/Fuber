import CheckEmail from "../../../components/auth/CheckEmail";
import { USER_TYPES } from "../../../utils/constants/userTypes";

function ClientCheckEmail() {
  return <CheckEmail userType={USER_TYPES.CLIENT} />;
}

export default ClientCheckEmail;