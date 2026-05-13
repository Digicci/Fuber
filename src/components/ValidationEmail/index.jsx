import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledLink } from '../../utils/Atoms'
import { Card, Container, Loader, Title, Text, IconWrapper } from './atoms'

function ValidationEmail() {
  const { email, validationCode } = useParams();

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    console.log("Email:", email);
    console.log("Validation code:", validationCode);

    // Simulation temporaire
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  }, [email, validationCode]);

  return (
    <Container>
      <Card>
        {status === "loading" && (
          <>
            <Loader />

            <Title>Validation en cours...</Title>

            <Text>
              Nous vérifions votre adresse email.
            </Text>
          </>
        )}

        {status === "success" && (
          <>
            <IconWrapper>
              <i className="ph-bold ph-check" />
            </IconWrapper>

            <Title>Email vérifié</Title>

            <Text>
              Votre adresse email{" "}
              <strong>{email}</strong> a bien été vérifiée.
              Bienvenue !
            </Text>

            <StyledLink to="/login">
              Se connecter
            </StyledLink>
          </>
        )}
      </Card>
    </Container>
  );
}

export default ValidationEmail;