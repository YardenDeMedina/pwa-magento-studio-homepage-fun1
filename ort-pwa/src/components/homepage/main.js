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

            {/* IMPORTANT COMMENT: */}

            {/* My plan was to create one ProductComp and write it three times (instead of these comps) 
            and send the data from GraphQl and the cataegory name as props (or use redux)... 
            but I did not know how to make such a GraphQl request that will 
            sort the information into different arrays for each category...  
            so for now I made a gql request from each product component */}

            <SweatersComp/>
            <DressesComp/>
            <SkirtsComp/>

        </React.Fragment>
    )
}

export default MainHomePageComp