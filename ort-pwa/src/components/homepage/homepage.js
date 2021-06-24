import React from 'react';
import {gql, useQuery} from '@apollo/client';
import { mergeClasses } from '@magento/venia-ui/lib/classify.js';
import defaultClasses from './homepage.css';

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

      <div>
        <h1>CSS-only Carousel</h1>
        <p>This carousel is created with HTML and CSS only.</p>
        <section className={classes.carousel} aria-label="Gallery">
          <ol className={classes.carousel__viewport}>
            <li id="carousel__slide1" tabIndex={0} className={classes.carousel__slide}>
              <div className={classes.carousel__snapper}>
                <a href="#carousel__slide4" className={classes.carousel__prev}>Go to last slide</a>
                <a href="#carousel__slide2" className={classes.carousel__next}>Go to next slide</a>
              </div>
            </li>
            <li id="carousel__slide2" tabIndex={0} className={classes.carousel__slide}>
              <div className={classes.carousel__snapper} />
              <a href="#carousel__slide1" className={classes.carousel__prev}>Go to previous slide</a>
              <a href="#carousel__slide3" className={classes.carousel__next}>Go to next slide</a>
            </li>
            <li id="carousel__slide3" tabIndex={0} className={classes.carousel__slide}>
              <div className={classes.carousel__snapper} />
              <a href="#carousel__slide2" className={classes.carousel__prev}>Go to previous slide</a>
              <a href="#carousel__slide4" className={classes.carousel__next}>Go to next slide</a>
            </li>
            <li id="carousel__slide4" tabIndex={0} className={classes.carousel__slide}>
              <div className={classes.carousel__snapper} />
              <a href="#carousel__slide3" className={classes.carousel__prev}>Go to previous slide</a>
              <a href="#carousel__slide1" className={classes.carousel__next}>Go to first slide</a>
            </li>
          </ol>
          <aside className={classes.carousel__navigation}>
            <ol className={classes.carousel__navigation-list}>
              <li className={classes.carousel__navigation-item}>
                <a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a>
              </li>
              <li className={classes.carousel__navigation-item}>
                <a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a>
              </li>
              <li className={classes.carousel__navigation-item}>
                <a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a>
              </li>
              <li className={classes.carousel__navigation-item}>
                <a href="#carousel__slide4" className="carousel__navigation-button">Go to slide 4</a>
              </li>
            </ol>
          </aside>
        </section>
      </div>


        {data.products.items.map(product => {
            return (
              <React.Fragment>

                <div>
                    {product.name}, {product.price.regularPrice.amount.value}
                </div>
              
                <img src={product.small_image.url} width="200" />
                
              </React.Fragment>
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
        from :"100",
        to : "500"
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