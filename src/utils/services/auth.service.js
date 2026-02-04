export const forgotPassword = async ({email,userType}) => {
  const reponse = await fetch('/auth/forgot-password',{
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({email,userType}),
  });

  return reponse.json();
};