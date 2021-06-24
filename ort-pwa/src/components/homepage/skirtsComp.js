import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';
import {gql, useQuery} from '@apollo/client';
import {GET_MY_SKIRTS} from '../gql_data/gqlSkirts'
import {Link} from 'react-router-dom'


function SkirtsComp(props){


    const { data } = useQuery(GET_MY_SKIRTS, {
        fetchPolicy : 'cache-and-network',
    });

    const classes = mergeClasses(defaultClasses)

    return(
        <React.Fragment>

            <div className={classes.product_title_outside}>
                <h1 className={classes.product_titles}>skirts</h1>
            </div> 

            <div className={classes.product_row}>

                {data.products.items.map((product,i) => {
                    return (
                        <Link to={product.url_key+".html"}>
                            <div className={classes.product_img}>
                                <img src={product.small_image.url} width="335" />
                            </div>
                        </Link>
                            
                        )
                    })}
            </div>

        </React.Fragment>
    )

    
}

export default SkirtsComp

