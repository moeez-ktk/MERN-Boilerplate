/*
This file contains middleware functions related to authentication.
It could include functions to verify JWT tokens, check user permissions,
and protect routes that require authentication.
*/

// Example of authentication middleware. modify it according to your requirements

// const verifyToken = (req, res, next) => {
// Verify JWT token
// const token = req.headers.authorization.split(' ')[1];
// if (token) {
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Invalid token' });
//     } else {
//       req.user = decoded;
//       next();
//     }
//   });
// } else {
//   return res.status(401).json({ message: 'Token not provided' });
// }
//   };

//   module.exports = {
//     verifyToken,
//   };
