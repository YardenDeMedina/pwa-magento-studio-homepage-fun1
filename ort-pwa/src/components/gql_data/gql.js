import {gql} from '@apollo/client';


export const GET_MY_PRODUCTS = gql(`
  query MyGetProducts(
    $numOfProducts : Int = 4,
    $searchTermOne : String = "sweater",
    $searchTermTwo : String = "dress",
    $searchTermThree : String = "scarf"
  ) {
    sweaters: products( 
      pageSize : $numOfProducts,
      search : $searchTermOne
    ) {
      items {
        small_image {
          url
        }
        url_key
      }

    },
    dresses: products(
      pageSize: $numOfProducts
      search : $searchTermTwo
    ){
      items {
        small_image {
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
        small_image {
          url
        }
        url_key
      }
    }
  }

`);

