const router = require('express').Router()
const { usersController, authController } = require('../controllers')

//missing all auth

//GET ALL USERS
router.get('/', usersController.index)

//GET ONE USER FROM TOKEN
router.get('/fromtoken', usersController.showOneFromToken)

//GET ONE USER FROM PROVIDED ID
router.get('/:id', usersController.showOne)

//CREATE ONE USER
//need ability to create admin
router.post('/', usersController.create)

//UPDATE USER
//need ability to update user to admin and back to standard
router.put('/:id', usersController.update)

//DELETE USER
router.delete('/:id', usersController.destroy)

module.exports = router
