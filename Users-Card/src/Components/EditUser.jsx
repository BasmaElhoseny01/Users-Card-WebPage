import React from "react";

import Add from '../images/add-user.png';
import edit from '../images/edit.png';
import remove from '../images/garbage.png';
import No_of_Users from '../images/usersno.png';
import summation from '../images/summation.png'

<link rel="stylesheet" href="../App.css" />

let Edit = ({Count}) => {

    return (
        <div className="Edit">
            <div className="options">
                <a href="#"><img src={Add} alt="add user" /></a>
                <a href="#"><img src={edit} alt="edit user" /></a>
                <a href="#"><img src={remove} alt="add user" /></a>
            </div>
            <div className="countUsers">
                <img src={summation} alt="summation" />
                <img src={No_of_Users} alt="No of users" />
                <h2>{Count}</h2>
            </div>
        </div>
    );
}

export default Edit;