import React from 'react';
import {gql, useQuery} from '@apollo/client';

const Homepage = (props) => {

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
    <div>
        {data.products.items.map(product => {
            return (
                <div>
                    {product.name}, {product.price.regularPrice.amount.value}
                </div>
            )
        })}
    </div>
    )
}

export default Homepage;

export const GET_MY_PRODUCTS = gql(`
{
    products(filter:{
      price :{
        from :"10",
        to : "25"
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