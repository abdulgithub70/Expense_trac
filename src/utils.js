import { toast } from 'react-toastify';

// Handle success notifications
export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right',
    });
};

// Handle error notifications
export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right',
    });
};

// Use an environment variable for the API URL or default to localhost for development
export const APIUrl =
    process.env.REACT_APP_API_URL || "http://localhost:8080";
