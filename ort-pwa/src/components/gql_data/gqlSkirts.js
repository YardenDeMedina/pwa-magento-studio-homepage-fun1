import {gql, useQuery} from '@apollo/client';

export const GET_MY_SKIRTS = gql(`
{
  products(filter:{
    name:{
      match:"skirt"
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


