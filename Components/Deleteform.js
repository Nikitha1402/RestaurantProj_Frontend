import React from 'react';
import axios from 'axios';
import { useState} from 'react';

//import './delete.css'
function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
  
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/Delete/' + id)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    return (
        <> <div className='delbg'> <center>
            <h2>Enter Your User Id to Cancel the order</h2>
            <div>

                <input type="number" placeholder='Enter User password' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
            </div>

            <button type="submit" className="bud" onClick
                ={del}>Submit</button>
                </center>
                
          
            <h2>
                {error}
            </h2>
            </div>
        </>
    );
}

export default Deleteform;


