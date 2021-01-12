import React, { useState } from 'react';
import axiosInstance from './axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
        username: '',
        name: '',
        surname:'',
        password: '',
        rpassword: '',
        afm: '',
        amka: '',
        phone: null,
        company: '',
        company: '',
        role: '',
        has_child_under_12: '',
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
			.post(`user/create/`, {
				email: formData.email,
				user_name: formData.username,
				password: formData.password,
			})
			.then((res) => {
				history.push('/login');
				console.log(res);
				console.log(res.data);
			});
	};

	return (
        <div className="wrapper row3">
            <main className="hoc container clear"> 
                <div className="content one_third first">
                    <form>
                        <fieldset>
                            <input className="inpt" type="text" placeholder="Όνομα" id="name" name="name" onChange={handleChange}/>
                            <input className="inpt" type="text" placeholder="Επίθετο" id="surname" name="surname" onChange={handleChange}/>
                            <input className="inpt" type="email" placeholder="Email" id="email" name="email" onChange={handleChange}/>
                            <input className="inpt" type="password" placeholder="Κωδικός" id="password" name="password" onChange={handleChange}/>
                            <input className="inpt" type="password" placeholder="Επαλήθευση Κωδικού" id="rpassword" name="rpassword" onChange={handleChange}/>
                            <input className="inpt" type="text" placeholder="ΑΦΜ" id="afm" name="afm" onChange={handleChange}/>
                            <input className="inpt" type="text" placeholder="ΑΜΚΑ" id="amka" name="amka" onChange={handleChange}/>
                        </fieldset>
                    </form>
                </div>
                <div className="one_quarter">

                </div>
            </main>
        </div>
	);
}
