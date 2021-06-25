import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';

import DressesComp from './dressesComp'
import SweatersComp from './sweatersComp';
import SkirtsComp from './skirtsComp';


function MainHomePageComp(props){

    const classes = mergeClasses(defaultClasses)

    return(
        <React.Fragment>
            {/* Box at the begnnning of the page */}
            <div className={classes.box}>Yarden's</div> 
         
            <SweatersComp/>
            <DressesComp/>
            <SkirtsComp/>

        </React.Fragment>
    )
}

export default MainHomePageComp