export const userRoleValidator = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.body.role

    if (allowedRoles.includes(userRole)) {
      next();
    } else {
      return res.status(403).json({ message: "Unauthorized Access" });
    }
  }
}
