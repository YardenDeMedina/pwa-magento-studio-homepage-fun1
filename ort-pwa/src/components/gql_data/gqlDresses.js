import {gql, useQuery} from '@apollo/client';

export const GET_MY_DRESSES = gql(`
{
  products(
    pageSize:5 
    filter:{
    name:{
      match:"dress"
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


