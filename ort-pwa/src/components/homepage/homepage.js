import React from 'react';
import {gql, useQuery} from '@apollo/client';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';
import MainHomePageComp from './main';


const Homepage = (props) => {

    const classes = mergeClasses(defaultClasses)

    const { error, loading, data } = useQuery(GET_MY_PRODUCTS, {
        fetchPolicy : 'cache-and-network',
    });

    if(error) {
        return (
            <div>
                An Error has occured!
            </div>
        );
    }
    if(loading || !data) {
        return (
            <div>
                Loading...
            </div>
        )
    }


    return (
    <div className={classes.main_class}>
      <MainHomePageComp/>


        {/* {data.products.items.map(product => {
            return (
              <React.Fragment> */}

                {/* <div>
                    {product.name}, {product.price.regularPrice.amount.value}
                </div> */}
              
                {/* <img src={product.small_image.url} width="400" />
                
              </React.Fragment>
            )
        })} */}


    </div>
    )
}

export default Homepage;

export const GET_MY_PRODUCTS = gql(`
{
  products(filter:{
    name:{
      match:"Dress"
    }

  }) {
    items {
      name
      id
      small_image {
        url
      }
      url_key
      price {
                regularPrice {
          amount {
            value
          }
        }
      }
    }
  }
}
`);