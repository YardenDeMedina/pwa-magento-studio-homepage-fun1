import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';
import {gql, useQuery} from '@apollo/client';
import {GET_MY_SWEATERS} from '../gql_data/gqlSweaters'


function SweatersComp(props){


    const { data } = useQuery(GET_MY_SWEATERS, {
        fetchPolicy : 'cache-and-network',
    });

    const classes = mergeClasses(defaultClasses)

    return(
        <React.Fragment>

            <div className={classes.product_title_outside}>
                <h1 className={classes.product_titles}>sweaters</h1>
            </div> 

            <div className={classes.product_row}>

                {data.products.items.map(product => {
                    return (
                        <div>
                            <img src={product.small_image.url} width="300" />
                        </div>
                            
                        )
                    })}
            </div>

        </React.Fragment>
    )

    
}

export default SweatersComp
