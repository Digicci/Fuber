import { useEffect, useState } from "react";
import { Card, Loader, Page, SuccessIcon, Title, Text, Lien, ErrorIcon } from './atoms'
import { USER_TYPES } from '../../../utils/constants/userTypes'
import { useAxios } from '../../../utils/hook/useAxios'
import { useParams } from 'react-router-dom'


function ValidationAccount({userType}) {
  const loginPath =
    userType === USER_TYPES.PARTNER
      ? "/partner/signin"
      : "/login";
  const { validationCode } = useParams();
  const axios = useAxios();

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!validationCode) {
      setStatus("error");
      return;
    }

    axios
      .post("/validation", {
        validationCode,
        userType,
      })
      .then(() => {
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [validationCode, userType]);

  return (
    <Page>
      <Card>
        {status === "loading" && (
          <>
            <Loader />
            <Title>Validation en cours...</Title>
            <Text>Nous vérifions votre compte.</Text>
          </>
        )}

        {status === "success" && (
          <>
            <SuccessIcon>✓</SuccessIcon>
            <Title>Compte validé</Title>
            <Text>Votre compte est maintenant activé.</Text>
            <Lien to={loginPath}>Se connecter</Lien>
          </>
        )}

        {status === "error" && (
          <>
            <ErrorIcon>!</ErrorIcon>
            <Title>Lien invalide</Title>
            <Text>Ce lien de validation est invalide ou expiré.</Text>
            <Lien to="/">Retour à l'accueil</Lien>
          </>
        )}
      </Card>
    </Page>
  );
}

export default ValidationAccount;