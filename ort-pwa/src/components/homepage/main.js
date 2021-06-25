import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';

import DressesComp from './compDresses'
import SweatersComp from './compSweaters';
import SkirtsComp from './compScarves';


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