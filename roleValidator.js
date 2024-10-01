//function takes two parameters
//first parameter is an array of roles that are allowed to access the module
//second parameter is an object with role specified in one of the attribute
export const userRoleValidator = (allowedRoles, clientRole) => {
  if (allowedRoles.includes(clientRole)) {
    return { message: `User role is valid.` };
  } else {
    return { message: `User role is invalid. Expected role to be one of ${allowedRoles.join(', ')}.` };
  }
};

//array of allowed(authorized roles)
const allowedRoles = ['admin', 'userR'];

//object of the client with role specified in the 'role' attribute
let client = {
  name: 'Anurag',
  gender: 'Male',
  role: 'user'
}

//user validator function called
userRoleValidator(allowedRoles, client.role);