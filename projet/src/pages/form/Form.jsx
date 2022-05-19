import React from 'react'
import "./Form.scss"
import Navbar from '../../componets/navbar/Navbar'
import Sidebar from '../../componets/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function Form() {
  return (
      <div className="new">
          <Sidebar />
          <div className="newContainer">
              <Navbar />
            <div className="top">
                <h1> Add New user</h1>
            </div>
            <div className="bottom">
                <div className="left">
                <img
                    src= "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    alt=""
                 />
                </div>
                <div className="right"><form>
                    <div className="formInput">
                        <lable>Username</lable>
                        <input type="text" placeholer= "Zeyneb" />
                    </div>
                    <div className="formInput">
                        <lable>Name and surname</lable>
                        <input type="text" placeholer= "Zeyneb sad" />
                    </div>
                    <div className="formInput">
                        <lable>Password</lable>
                        <input type="password"  />
                    </div>
                    <div className="formInput">
                        <lable>Email</lable>
                        <input type="text" placeholer= "her email "  />
                    </div>
                    <div className="formInput">
                        <lable>adresse</lable>
                        <input type="text" placeholer=" her adress"  />
                    </div>                    
                    </form> </div>
            </div>  
          </div>
          
      </div>
    
  )
}

export default Form