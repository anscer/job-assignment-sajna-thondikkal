const stateRepositories = require('../repositories/states');
const asyncHandler = require('../middlewares/asyncHandler');


// get all states
const getAllStates = asyncHandler(async(req,res,next)=>{
    const allStates = await stateRepositories.getAllStates();
    if(allStates && allStates.length > 0){
        res.status(200).json({"Message":"All States",Data:allStates});
    }
    else{
        res.status(404).json({"Message":"No states to display"});
    }

    
})


// get state by id
const getStateById = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const state =await stateRepositories.getStateById(id);
    if(state){
        res.status(200).json({"Message":"State with id is:",Data:state});
    }
    else{
        res.status(404).json({"Message":"No state found with this id"});
    }

    
})


// create new state
const createState = asyncHandler(async(req,res,next)=>{
    const {name,description,status,createdBy} = req.body;
    const newstate = await stateRepositories.createState({name,description,status,createdBy});
    if(newstate){
        res.status(200).json({"Message":"Successfuly Created new State","Data":newstate});
    }
    else{
        res.status(404).json({"Message":"No state created"});
    }
})


// update state
const updateState = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const {name,description,status,createdBy} = req.body;
    const updated = await stateRepositories.updateState(id,{name,description,status,createdBy});

    if(updated){
        res.status(200).json({"Message":"Updated successfully","Data":updated});
    }
    else{
        res.status(404).json({"Message":"States not updated"});
    }

})



// delete a state
const deleteState = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const ifExist = await stateRepositories.getStateById(id);
    if(ifExist){
        await stateRepositories.deleteState(id);
        res.status(200).json({"Success":true,"Message":`Successfully deleted the state with id ${id}`});
    }
    else{
        res.status(404).json({"Message":"State not found"});
    }

})

module.exports={
    getAllStates,
    getStateById,
    createState,
    updateState,
    deleteState
}