import ValidationAccount from '../../../components/auth/ValidationAccount';
import {USER_TYPES} from '../../../utils/constants/userTypes'

function ValidationAccountClient(){
  return <ValidationAccount userType={USER_TYPES.CLIENT}/>
}

export default ValidationAccountClient;