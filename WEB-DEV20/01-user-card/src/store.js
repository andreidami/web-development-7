import { createStore } from "redux";
// bani cere ii bagam in cont
const initialState = {
    name: "Alex Bakery",
    description: "Software Engineer, Speaker, and Occasional Model",
    likes: "Cats, Wine, and Black dresses",
    location: "localhost",
  
};

const reducer = (state) => {
    return state;
};
// omul care interactioneaza cu seiful
const store = createStore(reducer, initialState)

export default store;