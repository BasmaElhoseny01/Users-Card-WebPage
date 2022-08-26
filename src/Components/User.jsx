import React from "react";

import boy from '../images/boy.png';
import girl from '../images/girl.png';

import mobile from '../images/telephone.png'
import work_icon from '../images/workicon.png'
import map from '../images/map.png'
import web from '../images/website icon.png'
import IDicon from '../images/Id icon.png'
import e_mail from '../images/email.png'

<link rel="stylesheet" href="../App.css" />

let source, l;
let UserTag = ({ name, gender, ID, street, city, user_name, email, website, company, telephone }) => {
    if (gender == 'M') {
        source = <img src={boy} alt="boy img" />
    }
    else {
        source = <img src={girl} alt="girl img" />
    }
    return (
        <div className="User_Box">
            <div className="Upper_part">
                {source}
                <div className="Name_and_UserName">
                    <div className="Name_and_ID">
                        <h3>{name}</h3>
                        <div className="Info ID"><img src={IDicon} alt="ID icon" />{ID}</div>
                    </div>
                    <h5>User_Name: {user_name}</h5>
                    <div className="Info"><img src={e_mail} alt="email icon" /> {email}</div>
                </div>
            </div>
            <div className="Lower_part">
                <div className="Info"><img src={mobile} alt="mobile icon" />{telephone}</div>
                <div className="Info"><img src={work_icon} alt="work icon" />{company}</div>
                <div className="Info"><img src={map} alt="Address icon" /><p>{street},{city}</p></div>
                <div className="Info"><img src={web} alt="website icon" />{website}</div>
            </div>
        </div>
    );

};
export default UserTag