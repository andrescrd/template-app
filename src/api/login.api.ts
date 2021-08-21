import React, { useEffect, useState } from 'react';

const URL = 'http://localhost:9000/auth/login';

const loginApi = async (userName: string, password: string): Promise<{ accessToken: string }> => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, password })
        });

        if (!response.ok) {
            throw new Error("invalid user or password");
        }

        const data = await response.json();
        return data;

    } catch (err) {
        throw new Error(err);
    }
}

export default loginApi;