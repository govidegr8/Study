import React from "react";
import UserData from "./UserData";
import UserLists from "./UserList";
const local_data=[<UserData/>,<UserLists/>];
function Model(){
    return( 
    <h1>{local_data}</h1>);
}
export default Model;