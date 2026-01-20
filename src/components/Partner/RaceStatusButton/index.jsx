// path: src/components/Partner/RaceStatusButton/index.jsx
import "./style.scss";
import {useState} from "react";
import {toast} from "react-toastify";
import {useAxios} from "../../../utils/hook/useAxios";
import {useDispatch} from "react-redux";
import {fetchRaces} from "../../../utils/store/Partner/reducers/AuthReducer";

const RaceStatusButton = ({raceId}) => {
 
 const [showValidationInput, setShowValidationInput] = useState(false)
 const [validNumber, setValidNumber] = useState("")
 const [canSubmit, setCanSubmit] = useState(false)
 const api = useAxios()
 const dispatch = useDispatch()
 
 
 
 const handleChange = (e) => {
  const {value} = e.target
  if (value === "") {
   setValidNumber("")
  }
  if (isNaN(parseInt(value)) || value.length > 4) {
   return
  }
  setValidNumber(parseInt(value))
  if(value.length === 4) {
   setCanSubmit(true)
  } else {
   setCanSubmit(false)
  }
 }
 const openShowValidationInput = () => {
  setShowValidationInput(true)
 }
 
 const closeShowValidationInput = () => {
  setShowValidationInput(false)
  setValidNumber("")
 }
 
 const abortRace = () => {
 }
 
 const onValidate = () => {
  const id = toast.loading("Validation en cours")
  api.post("/race/validatePendingRace", {validationNumber: validNumber, raceId})
   .then(() => {
    toast.update(id, {
     type: "success",
     position: "top-right",
     autoClose: 3000,
     closeOnClick: true,
     icon: '👍',
     render: "Course validée",
     isLoading: false
    })
   })
   .catch((e) => {
    console.log(e)
    toast.update(id, {
     render: e.response.data,
     type: "error",
     position: "top-right",
     autoClose: 3000,
     closeOnClick: true,
     icon: "🤔",
     isLoading: false
    })
   })
   .finally(() => {
    dispatch(fetchRaces(api.api))
   })
 }
 
 return (
  <div className="RaceStatusButton">
   
   <div className={`container ${showValidationInput ? "container__hide" : "container__show"}`}>
    <button className={"container-button container-button__validate"} onClick={openShowValidationInput}>Valider</button>
    <button className={"container-button container-button__abort"} onClick={abortRace}>Annuler</button>
   </div>
   
   <div className={`container container__column ${showValidationInput ? "container__show" : "container__hide"}`}
        id="valid-input">
    <label htmlFor="valid">Code de validation</label>
    <input autoComplete={'off'} onChange={handleChange} value={validNumber} type="text" className="valid-input-input" id={"valid"}/>
    <div className="container">
     <button className={"container-button container-button__validate"} onClick={onValidate} disabled={!canSubmit}>Confirmer</button>
     <button className="container-button container-button__abort" onClick={closeShowValidationInput}>Annuler</button>
    </div>
   </div>
  
  </div>
 )
}

export default RaceStatusButton