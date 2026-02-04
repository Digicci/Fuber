import ForgotPasswordForm from '../../../components/auth/ForgotPasswordForm'
import {USER_TYPES} from '../../../utils/constants/userTypes'

function PartnerForgotPassword(){
  return(
    <>
      <ForgotPasswordForm userType={USER_TYPES.PARTNER} />
    </>
  )
}

export default PartnerForgotPassword;