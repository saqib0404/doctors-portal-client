import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div className='flex items-center justify-center flex-col h-screen'>
            <h2 className='text-red-500 text-3xl'>Some thing went wrong....!</h2>
            <h2 className='text-red-500 text-xl'>{error.statusText || error.message}</h2>
        </div>
    );
};

export default DisplayError;