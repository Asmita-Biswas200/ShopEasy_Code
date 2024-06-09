import jwt from 'jsonwebtoken';

const secret_ket = 'iuhXX$5&^^fgg';

export const authenticateJwt = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, secret_ket, (err, user) => {
        if (err) {
          res.status(403).json({ messsage: 'Forbidden' });
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json({ messsage: 'Unauthorized!' });
    }
  } catch (error) {
    res.status(500).json({ messsage: error });
  }
};
