
import { useState } from "react";
export const AddStudent = () => {
  

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');

     const handleSubmit=(e)=>{
       e.preventDefault();
        const payload={
              
      first_name:firstName,
      last_name :lastName,
      email:email,
     
     
        };
        fetch("http://localhost:8080/students",{
          method:"POST",
          headers:{
            "content-type":"application/json",
          },
          body:JSON.stringify(payload),
        });
      }

  

  return (
    <form className="addstudent" >
      <div>
        Firstname:{" "}
        <input
          onChange={(e)=>setFirstName(e.target.value)}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
        onChange={(e)=>setLastName(e.target.value)}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input
        onChange={(e)=>setEmail(e.target.value)}
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
         
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>
      <button 
      
      >submit</button>
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>

  );
    
};
