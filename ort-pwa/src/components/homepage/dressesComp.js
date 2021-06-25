import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';
import {useQuery} from '@apollo/client';
import {GET_MY_DRESSES} from '../gql_data/gql'
import {Link} from 'react-router-dom'


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
                        <Link to={product.url_key+".html"}>
                            <div className={classes.product_img}>
                                <img src={product.small_image.url} width="300" />
                            </div>
                        </Link>
                            
                        )
                    })}
            </div>

        </React.Fragment>
    )

    
}

export default DressesComp

