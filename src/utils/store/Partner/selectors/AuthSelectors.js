
export const getAuth = state => state.auth;


export const getAuthStatus = state => state.auth.online;

export const getAuthUser = state => state.auth.user;

export const getTeam = state => state.team.team;

export const getSelectedEmployee = state => parseInt(state.team.selectedEmployee) !== 0 ? state.team.team.filter((employe) =>
  employe.id === parseInt(state.team.selectedEmployee)) : state.team.team;

export const getNbDriver = state => state.team.team.length;