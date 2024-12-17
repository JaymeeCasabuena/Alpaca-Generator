import React from 'react';

const Part = ({ name, selectedPart, setSelectedPart }) => {
    const isSelected = name === selectedPart;
    return (
        <li
            onClick={() => setSelectedPart(name)}
            className={`button rounded-full border px-8 py-2 text-center ${isSelected ? 'red' : ''}`}
        >
            {name[0].toUpperCase() + name.substring(1)}
        </li>
    );
};

export default Part;
