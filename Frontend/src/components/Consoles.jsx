import React from 'react';
import consoleData from '../data/consoleData';
import ItemsTemplate from './ItemsTemplate';

function Consoles() {
    return (
        <ItemsTemplate 
            title="Consoles & Accessories" 
            data={consoleData} 
        />
    );
}

export default Consoles;
