import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secret_ket = 'iuhXX$5&^^fgg';

export const registration = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({ messsage: 'Email already exist' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const saveUser = await User.create({ email, password: hashedPass });
    const token = jwt.sign({ id: saveUser._id, email: saveUser }, secret_ket, {
      expiresIn: '1h',
    });
    return res.status(200).send({ token });
  } catch (error) {
    return res.status(500).json({ messsage: error });
  }
};

//Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, secret_ket, {
      expiresIn: '1h',
    });

    return res.status(200).json({ token, msg: 'Login Successfully!' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
