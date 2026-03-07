import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {useAxios} from '../../utils/hook/useAxios'
import { Button, ContainerForm, ContainerInput, Input } from './atoms'

function ResetPassword() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  
  const token = params.get("token");
  const email = decodeURIComponent(params.get('email'));

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const axios = useAxios()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      return setError('Les mots de passe ne correspondent pas');
    }

    setLoading(true);
    setError(null);

    try {
      const success = await axios.post("/user/reset-password", {token, email, password});
      if (success.data.valid && success.data.reset) {
        setMessage('Mot de passe modifié avec succès');
        // redirection après 2s vers login
        setTimeout(() => navigate('/login'), 2000);
      }
      else {
        setMessage("Une erreur est survenue lors de la modification de votre mot de passe.")
      }
    } catch (err) {
      setError('Lien invalide ou expiré');
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return <p>Token invalide.</p>;
  }

  if (!email) {
    return <p>Email invalide.</p>;
  }

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <h2>Nouveau mot de passe</h2>

      <ContainerInput>
        <Input
          type="password"
          placeholder="Nouveau mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
      </ContainerInput>

      <Button disabled={loading}>
        {loading ? 'Modification...' : 'Valider'}
      </Button>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </ContainerForm>
  );
}

export default ResetPassword;