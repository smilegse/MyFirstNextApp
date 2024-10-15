'use client'
import React from 'react';

const AlertButton = () => {
    return (
        <div>
            <button onClick={() => {
                alert('Hello')
            }}>Click
            </button>
        </div>
    );
};

export default AlertButton;