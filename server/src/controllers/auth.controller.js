const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res, next) => {
    try {
        const { name, email, role } = req.body;

        if (!name || !email || ! role) {
            return res.status(400).json({ message: 'name, email, and role are required' })
        }

        if (!['Employee', 'Admin'].includes(role)) {
            return res.status(400).json({ message: 'role must be Employee or Admin' });
        }

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email, role });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
    } catch (err) {
        next(err);
    }
};

module.exports = { login };