const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth.controller');

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Simulated login — returns a JWT and user role
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, role]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Employee
 *               email:
 *                 type: string
 *                 example: jane@deskflow.com
 *               role:
 *                 type: string
 *                 enum: [Employee, Admin]
 *     responses:
 *       200:
 *         description: Login successful, returns token and user
 *       400:
 *         description: Missing or invalid fields
 */

router.post('/login', login);

module.exports = router;