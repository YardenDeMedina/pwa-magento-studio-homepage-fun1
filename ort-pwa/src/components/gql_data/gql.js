import {gql} from '@apollo/client';


export const GET_MY_PRODUCTS = gql(`
  query MyGetProducts(
    $numOfProducts : Int = 4,
    $searchTermOne : String = "sweater",
    $searchTermTwo : String = "dress",
    $searchTermThree : String = "scarf"
  ) {
    dresses: products( 
      pageSize : $numOfProducts,
      search : $searchTermOne
    ) {
      items {
        image {
          url
        }
        url_key
      }

    },
    sweaters: products(
      pageSize: $numOfProducts
      search : $searchTermTwo
    ){
      items {
        image {
          url
        }
        url_key
      }
    },
      scarves: products(
      pageSize: $numOfProducts
      search : $searchTermThree
    ){
      items {
        image {
          url
        }
        url_key
      }
    }
  }

`);

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

export const GET_MY_SCARVES = gql(`
{
  products(
    pageSize:4 
    filter:{
    name:{
      match:"scarf"
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





