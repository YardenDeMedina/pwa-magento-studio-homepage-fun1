import {gql, useQuery} from '@apollo/client';

export const GET_MY_DRESSES = gql(`
{
  products(filter:{
    name:{
      match:Dress
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


