import { combineReducers } from 'redux';

import {registrationHospital} from './registration.reducer';
import {donorRegistration} from './donorRegistration';


const rootReducer = combineReducers({
   registrationHospital,
   donorRegistration
});

export default rootReducer;