const router = require('express').Router()
const { projectsController, authController } = require('../controllers')

//missing all auth

//GET ALL PROJECTS
router.get('/', projectsController.index)

//GET ON PROJECTS
router.get('/:id', projectsController.showOne)

//CREATE A PROJECT
//admin only??
router.post('/', projectsController.create)

//UPDATE A PROJECT
//admin only??
router.put('/:id', projectsController.update)

//DELETE A PROJECT
router.delete('/:id', projectsController.destroy)

module.exports = router
