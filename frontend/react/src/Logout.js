import React, { useEffect } from 'react';
import axiosInstance from './axios';
import { useHistory } from 'react-router-dom';

export default function SignOut() {
        const response = axiosInstance.post('authentication/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
        })
        .then(res => {
            localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        window.location.href = '/';
                        
        })
        .catch((err)=>{
            console.log(err.message)
        });
}