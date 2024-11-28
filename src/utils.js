import { toast } from 'react-toastify';

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}
export const APIUrl = "https://expense-bknd-1.onrender.com"; // Render backend URL

//export const APIUrl = process.env.REACT_APP_API_URL || 'https://expense-bknd-1.onrender.com';
//export const APIUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';