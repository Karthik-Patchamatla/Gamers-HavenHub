import React from 'react';
import hardwareData from '../data/hardwareData';
import ItemsTemplate from './ItemsTemplate';

function PCHardwares() {
    return (
        <ItemsTemplate 
            title="PC Hardware" 
            data={hardwareData} 
        />
    );
}

export default PCHardwares;
