import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';

import DressesComp from './compDresses'
import SweatersComp from './compSweaters';
import SkirtsComp from './compScarves';
import ProductsComp from './compProduct';


function MainHomePageComp(props){

    const classes = mergeClasses(defaultClasses)

    console.log("YARDEN!!!!", props.data);

    return(
        <>
            {/* Box at the begnnning of the page */}
            <div className={classes.box}>Yarden's</div> 
            
            <ProductsComp data={props.data.sweaters} product={"sweaters"} />
            <ProductsComp data={props.data.dresses} product={"dresses"} />
            <ProductsComp data={props.data.scarves} product={"scarves"} />

        </>
    )
}

export default MainHomePageComp