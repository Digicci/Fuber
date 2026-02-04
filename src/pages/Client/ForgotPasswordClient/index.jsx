import ForgotPasswordForm from '../../../components/auth/ForgotPasswordForm'
import {USER_TYPES} from '../../../utils/constants/userTypes'

function ClientForgotPassword(){
  return(
    <>
      <ForgotPasswordForm userType={USER_TYPES.CLIENT} />
    </>
  )
}

export default ClientForgotPassword;