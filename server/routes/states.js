const express = require('express');
const router = express.Router();
const stateControllers = require('../controllers/states');
const { verifyTokenHandler} = require('../middlewares/jwtHandler.js');
const {verifyRoles} = require('../middlewares/verifyRoles.js');



// get all states
router.get('/',stateControllers.getAllStates);

// get state by id
router.get('/:id',stateControllers.getStateById);

// create state
router.post('/',[verifyTokenHandler,verifyRoles(['maintenance_engineer'])],stateControllers.createState);

// update state
router.put('/:id',[verifyTokenHandler,verifyRoles(['maintenance_engineer'])],stateControllers.updateState)

// delete state
router.delete('/:id',[verifyTokenHandler,verifyRoles(['maintenance_engineer'])],stateControllers.deleteState);

module.exports = router;