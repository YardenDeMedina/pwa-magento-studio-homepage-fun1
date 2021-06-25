import {gql} from '@apollo/client';

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

export const GET_MY_SKIRTS = gql(`
{
  products(
    pageSize:4 
    filter:{
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


export const GET_MY_SWEATERS = gql(`
{
  products(
    pageSize:4
    filter:{
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





