import React, { useState } from 'react';
import axiosInstance from './axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
        username: '',
        first_name: '',
        last_name: '',
        password: '',
        rpassword: '',
        afm: '',
        amka: '',
        phone: null,
        company: '',
        role: '',
        has_child_under_12: false,
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
        
        .post(`authentication/register`, JSON.stringify(formData))
        .then((res) => {
            
            // history.push('/');
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error.response.data)
            console.log(error)
        });
	};

	return (
        <div className="wrapper row3">
            <main className="hoc container clear"> 
                <div className="content one_third first">
                    <form>
                        <fieldset>
                            <input className="inpt" type="text" placeholder="Όνομα χρήστη" id="username" name="username" onChange={handleChange}/>
                            <input className="inpt" type="text" name="first_name" id="first_name" placeholder="Όνομα" onChange={handleChange}/>
                            <input className="inpt" type="text" name="last_name" id="last_name" placeholder="Επίθετο" onChange={handleChange}/>
                            <input className="inpt" type="email" placeholder="E-mail" id="email" name="email" onChange={handleChange}/>
                            <input className="inpt" type="password" placeholder="Κωδικός" id="password" name="password" onChange={handleChange}/>
                            <input className="inpt" type="password" placeholder="Επαλήθευση Κωδικού" id="rpassword" name="rpassword" onChange={handleChange}/>
                            <input className="inpt" type="text" placeholder="Κινητό" id="phone" name="phone" onChange={handleChange}/>
                            <input className="inpt" type="text" placeholder="ΑΦΜ" id="afm" name="afm" onChange={handleChange}/>
                            <input className="inpt" type="text" placeholder="ΑΜΚΑ" id="amka" name="amka" onChange={handleChange}/>
                            <input className="inpt" type="text" placeholder="Εταιρεία" id="company" name="company" onChange={handleChange}/>
                            <select style={{marginTop: "0.75rem"}} name="role" onChange={handleChange}>
                                <option value="">---Please select your role---</option>
                                <option value="employer">Εργοδότης</option>
                                <option value="employee">Εργαζόμενος</option>
                            </select>
                        </fieldset>
                        <button style={{marginTop: "0.75rem"}} className="btn" type="button" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
                <div className="one_quarter">

                </div>
            </main>
        </div>
    );
}
