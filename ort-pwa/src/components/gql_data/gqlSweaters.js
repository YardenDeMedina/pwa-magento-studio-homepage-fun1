import {gql, useQuery} from '@apollo/client';

export const GET_MY_SWEATERS = gql(`
{
  products(filter:{
    name:{
      match:"sweater"
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


