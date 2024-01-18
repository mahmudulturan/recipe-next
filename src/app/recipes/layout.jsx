import React from 'react';


export const metadata = {
    title: 'All Recipe | Recipe Rover',
    description: 'All recipe are contain here, there are many kind of recipe',
}

export default function layout({ children }) {
    return (
        <main>
            {children}
        </main>
    );
}