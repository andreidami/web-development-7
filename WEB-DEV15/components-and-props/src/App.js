import React from "react";
import  BirthdayCard from"./BirthdayCard";
import { Clock } from './Clock';


const App = (props) => {
    return (
        <>
    <Clock timezone="America/Los_Angeles" />
    <Clock  timezone="Asia/Tokio"/>
    <Clock  timezone= "Pacific/Guam"/>
    <BirthdayCard gender="male" name="Cosmin" age="25" />
    <BirthdayCard gender="female" name="Cosmina" age="21" />
    <BirthdayCard gender="female" name="Dolores" age="45" />
        </>
    );
};

export default App