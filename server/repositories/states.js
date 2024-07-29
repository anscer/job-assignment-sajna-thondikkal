const State = require('../models/states');


// get all states
async function getAllStates(){
    try {
        const allStates = await State.find();
        return allStates;
    } catch (error) {
        throw error;
    }
}

// get states 
async function getStateById(id){
    try {
        const state = await State.findById(id);
        return state;
    } catch (error) {
        throw error;
    }
}


async function createState(state_obj){
    try {
       const newState = await State.create(state_obj);
       return newState;
    } catch (error) {
        throw error;
    }
}



async function updateState(id,state_obj){
    try {
        const updated = await State.findByIdAndUpdate(id,state_obj,{new:true,runValidators:true});
        return updated;
    } catch (error) {
        throw error;
    }
}

async function deleteState(id){
    try {
        const deleted = await State.findByIdAndDelete(id)
        return deleted;

    } catch (error) {
        
    }
}

module.exports = {
    getAllStates,
    getStateById,
    createState,
    updateState,
    deleteState
}