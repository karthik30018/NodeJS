const express = require('express')

const router = express.Router();
const {handleGetAllUsers,handleGetUserById,handleCreateUser,handleUpdateUserById,handleDeleteUserByID
} = require('../controllers/user')

// Routes

router.route('/')
.get(handleGetAllUsers)
.post(handleCreateUser)


router.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserByID)


module.exports = router