import React from 'react';
import bestsellers from '../data/bestsellersData';
import ItemsTemplate from './ItemsTemplate';

function BestSellers() {
    return (
        <ItemsTemplate 
            title="Best Sellers" 
            data={bestsellers} 
        />
    );
}

export default BestSellers;
