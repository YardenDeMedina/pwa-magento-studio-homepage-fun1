import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';
import {Link} from 'react-router-dom'


function ProductsComp(props){

    const classes = mergeClasses(defaultClasses)

    let product_array = props.data.items;
    let product = props.product;

    return(
        <>
            <div className={classes.product_title_outside}>
                <h1 className={classes.product_titles}>{product}</h1>
            </div> 

            <div className={classes.product_row}>
                {product_array.map((product,i) => {
                    return (
                        <Link key={i} to={product.url_key+".html"}>
                            <div className={classes.product_img}>
                                <img src={product.small_image.url} width="300" alt={product}/>
                            </div>
                        </Link>
                            
                        )
                    })}
            </div>
        </>
    )

    
}

export default ProductsComp

