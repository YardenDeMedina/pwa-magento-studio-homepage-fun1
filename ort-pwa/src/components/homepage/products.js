import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';

function ProductsComp(props){

    let product = props.product

    const classes = mergeClasses(defaultClasses)

    return(
        <div>
            <h1 className={classes.product_titles}>{product}</h1>
        </div> 
    )
}

export default ProductsComp