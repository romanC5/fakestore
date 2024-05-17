import React from 'react'
import Wrapper from '../Components/Wrapper'
import { useGetPokemonByNameQuery } from '../services/productApi'
import { Link } from 'react-router-dom'

const Home = () => {
  const {data} = useGetPokemonByNameQuery()
  console.log("all product",data)
  return (
    <>
      <Wrapper>

        <section id="billboard" class="overflow-hidden">

          <button class="button-prev">
            <i class="icon icon-chevron-left"></i>
          </button>
          <button class="button-next">
            <i class="icon icon-chevron-right"></i>
          </button>
          <div class="swiper main-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style={{ backgroundImage: "url('src/assets/imgges/banner1.jpg');" }} >
                <div class="banner-content">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6">
                        <h2 class="banner-title">Summer Collection</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                        <div class="btn-wrap">
                          <a href="shop.html" class="btn btn-light btn-medium d-flex align-items-center" tabindex="0">Shop it now <i class="icon icon-arrow-io"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" style={{ backgroundImage: "url('src/assets/imgges/banner1.jpg')" }}>
                <div class="banner-content">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6">
                        <h2 class="banner-title">Casual Collection</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                        <div class="btn-wrap">
                          <a href="/shop" class="btn btn-light btn-light-arrow btn-medium d-flex align-items-center" tabindex="0">Shop it now <i class="icon icon-arrow-io"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        <section id="latest-collection">
          <div class="container">
            <div class="product-collection row">
              <div class="col-lg-7 col-md-12 left-content">
                <div class="collection-item">
                  <div class="products-thumb">
                    <img src="src/assets/images/collection-item1.jpg" alt="collection item" class="large-image image-rounded" />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 product-entry">
                    <div class="categories">casual collection</div>
                    <h3 class="item-title">street wear.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                    <div class="btn-wrap">
                      <a href="shop.html" class="d-flex align-items-center">shop collection <i class="icon icon-arrow-io"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12 right-content flex-wrap">
                <div class="collection-item top-item">
                  <div class="products-thumb">
                    <img src="src/assets/images/collection-item2.jpg" alt="collection item" class="small-image image-rounded" />
                  </div>
                  <div class="col-md-6 product-entry">
                    <div class="categories">Basic Collection</div>
                    <h3 class="item-title">Basic shoes.</h3>
                    <div class="btn-wrap">
                      <a href="shop.html" class="d-flex align-items-center">shop collection <i class="icon icon-arrow-io"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="collection-item bottom-item">
                  <div class="products-thumb">
                    <img src="src/assets/images/collection-item3.jpg" alt="collection item" class="small-image image-rounded" />
                  </div>
                  <div class="col-md-6 product-entry">
                    <div class="categories">Best Selling Product</div>
                    <h3 class="item-title">woolen hat.</h3>
                    <div class="btn-wrap">
                      <a href="shop.html" class="d-flex align-items-center">shop collection <i class="icon icon-arrow-io"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="subscribe" class="padding-large">
          <div class="container">
            <div class="row">
              <div class="block-text col-md-6">
                <div class="section-header">
                  <h2 class="section-title">Get 25% off Discount Coupons</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
              </div>
              <div class="subscribe-content col-md-6">
                <form id="form" class="d-flex justify-content-between">
                  <input type="text" name="email" placeholder="Enter your email addresss here" />
                  <button class="btn btn-dark">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="selling-products" class="product-store bg-light-grey padding-large">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">Best selling products</h2>
            </div>
            <ul class="tabs list-unstyled">
              <li data-tab-target="#all" class="active tab">All</li>
              <li data-tab-target="#shoes" class="tab">Shoes</li>
              <li data-tab-target="#tshirts" class="tab">Tshirts</li>
              <li data-tab-target="#pants" class="tab">Pants</li>
              <li data-tab-target="#hoodie" class="tab">Hoodie</li>
              <li data-tab-target="#outer" class="tab">Outer</li>
              <li data-tab-target="#jackets" class="tab">Jackets</li>
              <li data-tab-target="#accessories" class="tab">Accessories</li>
            </ul>
            <div class="tab-content">
              <div id="all" data-tab-content class="active">
                <div class="row d-flex flex-wrap">
                  {data?.map((data) => (
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src={data.images} alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltipd-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <Link to={`/productdetail/${data?.id}`}>{data.title}</Link>
                      </h3>
                      <div class="item-price text-primary">${data.price}</div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              <div id="shoes" data-tab-content>
                <div class="row d-flex flex-wrap">
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products13.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Orange white Nike</a>
                      </h3>
                      <div class="item-price text-primary">$55.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products14.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Running Shoe</a>
                      </h3>
                      <div class="item-price text-primary">$65.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products15.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Tennis Shoe</a>
                      </h3>
                      <div class="item-price text-primary">$80.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products16.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Nike Brand Shoe</a>
                      </h3>
                      <div class="item-price text-primary">$65.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tshirts" data-tab-content>
                <div class="row d-flex flex-wrap">
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products3.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Silk White Shirt</a>
                      </h3>
                      <div class="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products8.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">White Half T-shirt</a>
                      </h3>
                      <div class="item-price text-primary">$30.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products5.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Ghee Half T-shirt</a>
                      </h3>
                      <div class="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products7.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Long Sleeve T-shirt</a>
                      </h3>
                      <div class="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="pants" data-tab-content>
                <div class="row d-flex flex-wrap">
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products1.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Half sleeve T-shirt</a>
                      </h3>
                      <div class="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products4.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Grunge Hoodie</a>
                      </h3>
                      <div class="item-price text-primary">$30.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products7.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Long Sleeve T-shirt</a>
                      </h3>
                      <div class="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products2.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Stylish Grey Pant</a>
                      </h3>
                      <div class="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="hoodie" data-tab-content>
                <div class="row d-flex flex-wrap">
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products17.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">White Hoodie</a>
                      </h3>
                      <div class="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products4.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Navy Blue Hoodie</a>
                      </h3>
                      <div class="item-price text-primary">$45.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products18.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Dark Green Hoodie</a>
                      </h3>
                      <div class="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="outer" data-tab-content>
                <div class="row d-flex flex-wrap">
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products3.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Silk White Shirt</a>
                      </h3>
                      <div class="item-price text-primary">$ 35.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products4.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Grunge Hoodie</a>
                      </h3>
                      <div class="item-price text-primary">$ 30.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products6.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Grey Check Coat</a>
                      </h3>
                      <div class="item-price text-primary">$ 30.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products7.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Long Sleeve T-shirt</a>
                      </h3>
                      <div class="item-price text-primary">$ 40.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="jackets" data-tab-content>
                <div class="row d-flex flex-wrap">
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products5.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Full Sleeve Jeans Jacket</a>
                      </h3>
                      <div class="item-price text-primary">$40.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products2.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Stylish Grey Coat</a>
                      </h3>
                      <div class="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products6.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Grey Check Coat</a>
                      </h3>
                      <div class="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="accessories" data-tab-content>
                <div class="row d-flex flex-wrap">
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products19.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Stylish Women Bag</a>
                      </h3>
                      <div class="item-price text-primary">$35.00</div>
                    </div>
                  </div>
                  <div class="product-item col-lg-3 col-md-6 col-sm-6">
                    <div class="image-holder">
                      <img src="src/assets/images/selling-products20.jpg" alt="Books" class="product-image" />
                    </div>
                    <div class="cart-concern">
                      <div class="cart-button d-flex justify-content-between align-items-center">
                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                        </button>
                        <button type="button" class="view-btn tooltip
                        d-flex">
                          <i class="icon icon-screen-full"></i>
                          <span class="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" class="wishlist-btn">
                          <i class="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <h3 class="product-title">
                        <a href="single-product.html">Stylish Gadgets</a>
                      </h3>
                      <div class="item-price text-primary">$30.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" class="padding-large no-padding-bottom">
          <div class="container">
            <div class="reviews-content">
              <div class="row d-flex flex-wrap">
                <div class="col-md-2">
                  <div class="review-icon">
                    <i class="icon icon-right-quote"></i>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="swiper testimonial-swiper overflow-hidden">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="testimonial-detail">
                          <p>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                          <div class="author-detail">
                            <div class="name">By Maggie Rio</div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="testimonial-detail">
                          <p>“Dignissim massa diam elementum habitant fames. Id nullam pellentesque nisi, eget cursus dictumst pharetra, sit. Pulvinar laoreet id porttitor egestas dui urna. Porttitor nibh magna dolor ultrices iaculis sit iaculis.”</p>
                          <div class="author-detail">
                            <div class="name">By John Smith</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-arrows">
                    <button class="prev-button">
                      <i class="icon icon-arrow-left"></i>
                    </button>
                    <button class="next-button">
                      <i class="icon icon-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section class="shoppify-section-banner">
          <div class="container">
            <div class="product-collection">
              <div class="left-content collection-item">
                <div class="products-thumb">
                  <img src="src/assets/images/model.jpg" alt="collection item" class="large-image image-rounded" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 product-entry">
                  <div class="categories">Denim collection</div>
                  <h3 class="item-title">The casual selection.</h3>
                  <p>Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio.</p>
                  <div class="btn-wrap">
                    <a href="shop.html" class="d-flex align-items-center">shop collection <i class="icon icon-arrow-io"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quotation" class="align-center padding-large">
          <div class="inner-content">
            <h2 class="section-title divider">Quote of the day</h2>
            <blockquote>
              <q>It's true, I don't like the whole cutoff-shorts-and-T-shirt look, but I think you can look fantastic in casual clothes.</q>
              <div class="author-name">- Dr. Seuss</div>
            </blockquote>
          </div>
        </section>
      </Wrapper>
    </>
  )
}

export default Home
