import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';
import {gql, useQuery} from '@apollo/client';
import {GET_MY_DRESSES} from '../gql_data/gqlDresses'


function DressesComp(props){


    const { data } = useQuery(GET_MY_DRESSES, {
        fetchPolicy : 'cache-and-network',
    });

    const classes = mergeClasses(defaultClasses)

    return(
        <React.Fragment>

            <div className={classes.product_title_outside}>
                <h1 className={classes.product_titles}>dresses</h1>
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

export default DressesComp

