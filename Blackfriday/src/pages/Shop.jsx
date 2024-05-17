import React from 'react'
import Wrapper from '../Components/Wrapper'
import { useGetPokemonByNameQuery } from '../services/productApi'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useGetCategoryByNameQuery } from '../services/categoryApi'

const Shop = () => {
  const background = {
     background : "url(src/assets/images/hero-image.jpg)",
     backgroundPosition: "top",

  }  
  const param = useLocation()
  const {data} = useGetPokemonByNameQuery(param.search)
  console.log(data)
  const {data: category} = useGetCategoryByNameQuery()
  console.log(category)
  
  return (
    <>
      <Wrapper>
      <section class="site-banner jarallax min-height300 padding-large" style={background}>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="page-title">Shop page</h1>
            <div class="breadcrumbs">
              <span class="item">
                <a href="index.html">Home /</a>
              </span>
              <span class="item">Shop</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="shopify-grid padding-large">
      <div class="container">
        <div class="row">

          <section id="selling-products" class="col-md-9 product-store">
            <div class="container">
              <ul class="tabs list-unstyled">

                <li data-tab-target="#all" class="active tab">All</li>
            {category?.map((category) => (
                <li data-tab-target="#shoes" class="tab"> <Link to={`/shop/?categoryId=${category?.id}`}>{category?.name}</Link></li>
              ))}
              </ul>
              <div class="tab-content">
                <div id="all" data-tab-content class="active">
                  <div class="row d-flex flex-wrap">
                    {data?.map((data) => (
                    <div class="product-item col-lg-4 col-md-6 col-sm-6">
                      <div class="image-holder">
                        <img src={data?.images} alt="Books" class="product-image"/>
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
                          
                          <Link to={`/productdetail/${data?.id}`}><span>{data.title}</span></Link>
                        </h3>
                        <div class="item-price text-primary">${data?.price}</div>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              
              </div>
              <nav class="navigation paging-navigation text-center padding-medium" role="navigation">
                <div class="pagination loop-pagination d-flex justify-content-center">
                  <a href="#" class="pagination-arrow d-flex align-items-center">
                    <i class="icon icon-arrow-left"></i>
                  </a>
                  <span aria-current="page" class="page-numbers current">1</span>
                  <a class="page-numbers" href="#">2</a>
                  <a class="page-numbers" href="#">3</a>
                  <a href="#" class="pagination-arrow d-flex align-items-center">
                    <i class="icon icon-arrow-right"></i>
                  </a>
                </div>
              </nav>
            </div>
          </section>

          <aside class="col-md-3">
            <div class="sidebar">
              <div class="widgets widget-menu">
                <div class="widget-search-bar">
                  <form role="search" method="get" class="d-flex">
                    <input class="search-field" placeholder="Search" type="text"/>
                    <button class="btn btn-dark"><i class="icon icon-search"></i></button>
                  </form>
                </div> 
              </div>
              <div class="widgets widget-product-tags">
                <h5 class="widget-title">Tags</h5>
                <ul class="product-tags sidebar-list list-unstyled">
                  <li class="tags-item">
                    <a href="">White</a>
                  </li>
                  <li class="tags-item">
                    <a href="">Cheap</a>
                  </li>
                  <li class="tags-item">
                    <a href="">Branded</a>
                  </li>
                  <li class="tags-item">
                    <a href="">Modern</a>
                  </li>
                  <li class="tags-item">
                    <a href="">Simple</a>
                  </li>
                </ul>
              </div>
              <div class="widgets widget-product-brands">
                <h5 class="widget-title">Brands</h5>
                <ul class="product-tags sidebar-list list-unstyled">
                  <li class="tags-item">
                    <a href="">Nike</a>
                  </li>
                  <li class="tags-item">
                    <a href="">Adidas</a>
                  </li>
                  <li class="tags-item">
                    <a href="">Puma</a>
                  </li>
                  <li class="tags-item">
                    <a href="">Spike</a>
                  </li>
                </ul>
              </div>
              <div class="widgets widget-price-filter">
                <h5 class="widget-title">Filter By Price</h5>
                <ul class="product-tags sidebar-list list-unstyled">
                  <li class="tags-item">
                    <a href="">Less than $10</a>
                  </li>
                  <li class="tags-item">
                    <a href="">$10- $20</a>
                  </li>
                  <li class="tags-item">
                    <a href="">$20- $30</a>
                  </li>
                  <li class="tags-item">
                    <a href="">$30- $40</a>
                  </li>
                  <li class="tags-item">
                    <a href="">$40- $50</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          
        </div>        
      </div>      
    </div>

      </Wrapper>
    </>
  )
}

export default Shop
