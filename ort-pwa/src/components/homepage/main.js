import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';

import ProductsComp from './products';


function MainHomePageComp(props){

    const classes = mergeClasses(defaultClasses)

    return(
        <React.Fragment>
            {/* Box at the begnnning of the page */}
            <div className={classes.box}>Yarden's</div> 
         
            <ProductsComp product={"Dresses!!"}/>



        </React.Fragment>
    )
}

export default MainHomePageComp