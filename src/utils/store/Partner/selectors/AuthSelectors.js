
export const getAuth = state => state.auth;


export const getAuthStatus = state => state.auth.online;

export const getAuthUser = state => state.auth.user;

export const getTeam = state => state.team.team;

export const getSelectedEmployee = state => parseInt(state.team.selectedEmployee) !== 0 ? state.team.team.filter((employee) =>
    employee.id === parseInt(state.team.selectedEmployee)) : state.team.team;

export const getSelectedDriverId = state => state.team.selectedEmployee

export const getNbDriver = state => state.team.team.length;

export const getDriverId = state => state.auth.user?.id;

export const selectEmployeeAtPeriod = state => parseInt(state.team.selectedEmployee) !== 0 ? state.team.team.filter((employee) =>
    employee.id === parseInt(state.team.selectedEmployee)) : state.team.team;