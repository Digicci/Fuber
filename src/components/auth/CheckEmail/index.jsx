import { Card, Page, Title, Text, TextSmall, StyledLink } from './atoms'
import { USER_TYPES } from '../../../utils/constants/userTypes'



function CheckEmail({userType}) {

  const loginPath =
    userType === USER_TYPES.PARTNER
      ? "/partner/signin"
      : "/login"

  return (
    <Page>
      <Card>
        <Title>Vérifiez votre email</Title>

        <Text>
          Votre inscription a bien été prise en compte.
          Un email de validation vient de vous être envoyé.
        </Text>

        <TextSmall>
          Cliquez sur le lien reçu pour activer votre compte.
        </TextSmall>

        <StyledLink to={loginPath}>
          Retour à la connexion
        </StyledLink>
      </Card>
    </Page>
  );
}

export default CheckEmail;