import {useState} from 'react';
import {
  Message,
  ContainerForm, Input, Button
} from './atoms'
import Error from '../Error'
import {useAxios} from "../../utils/hook/useAxios";

function ForgotPasswordForm({userType}){

  const [email, setEmail] = useState('');
  const [loading,setLoading] = useState(false);
  const [success,setSuccess]= useState(false);
  const [error, setError]= useState(null);
  const api = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try{
      const success = await api.post("/user/forgotPassword", {email,userType});

      if(success){
        setSuccess(true)
      } else {
        setSuccess(false)
      }
    } catch (err){
      setError(err.message('Une erreur est survenue'));
    } finally {
      setLoading(false);
    }
  };

  if(success) {
    return(
      <Message>
        Si un compte existe, un mail de réinitialisation a été envoyé
      </Message>
    );
  }
  return (
      <ContainerForm>
        <h2> Mot de passe oublié</h2>

        <Input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button type="submit" disabled={loading} onClick={handleSubmit}>
          {loading ? 'Envoi...' : 'Réinitialiser'}

          {error && <Error>{error}</Error>}
        </Button>
      </ContainerForm>
  );
}

export default ForgotPasswordForm;