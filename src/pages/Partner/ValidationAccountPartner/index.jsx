import ValidationAccount from '../../../components/auth/ValidationAccount';
import {USER_TYPES} from '../../../utils/constants/userTypes';

function ValidationAccountPartner(){
  return <ValidationAccount userType={USER_TYPES.PARTNER}/>
}

export default ValidationAccountPartner;