/* eslint-disable */
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="wpsuper-loader">
          <div className="loader-wrapper">
              <div className="loader-content">
                  <div className="loader-dot dot-four"></div>
                  <div className="loader-dot dot-three"></div>
                  <div className="loader-dot dot-two"></div>
                  <div className="loader-dot dot-one"></div>
              </div>
          </div>
      </div>
      <div className="wrapper">
          <header className="sticky-header header-area transparent-header">
              <div className="container">
                  <nav className="navbar navbar-expand-md">
                      <a className="navbar-brand" href="index.html">
                          gxap<i className="fa fa-play"></i>
                      </a>
                      <div className="navbar-toggler hamburger hamburger--collapse" data-toggle="collapse"
                           data-target="#navbar-main">
                          <div className="hamburger-box">
                              <div className="hamburger-inner"></div>
                          </div>
                      </div>
                      <div id="navbar-main" className="navbar-collapse collapse justify-content-end">
                          <ul className="navbar-nav main-menu">
                              <li><a className="nav-link" href="#page-top">Home</a></li>
                              <li><a className="nav-link" href="#service">Service</a></li>
                              <li><a className="nav-link" href="#about">About</a></li>
                              <li><a className="nav-link" href="#features">features</a></li>
                              <li><a className="nav-link" href="#pricing">pricing</a></li>
                              <li><a className="nav-link" href="#blog">Blog</a></li>
                              <li><a className="nav-link" href="#contact">Contact</a></li>
                              <li className="dropdown">
                                  <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                     data-toggle="dropdown" aria-haspopup="true"
                                     aria-expanded="false">pages</a>
                                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                      <li><a className="dropdown-item" href="index.html">Home 1</a></li>
                                      <li><a className="dropdown-item" href="index-2.html">home 2</a></li>
                                      <li><a className="dropdown-item" href="index-3.html">home 3</a></li>
                                      <li><a className="dropdown-item" href="index-4.html">home 4</a></li>
                                      <li className="dropdown-divider"></li>
                                      <li><a className="dropdown-item" href="blog.html">Blog Grid</a></li>
                                      <li><a className="dropdown-item" href="blog-fullwidth.html">Blog Full width</a></li>
                                      <li><a className="dropdown-item" href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                      <li className="dropdown-divider"></li>
                                      <li><a className="dropdown-item" href="single-post.html">Post right sidebar</a></li>
                                      <li><a className="dropdown-item" href="single-post-left-sidebar.html">post left sidebar</a>
                                      </li>
                                      <li><a className="dropdown-item" href="single-post-fullwidth.html">post Full width</a>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                          <ul className="header-extra-btn">
                              <li>
                                  <a href="#" className="btn btn-gradient btn-gradient-reverse">Download Now</a>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </header>
          <div className="slider-area clearfix">
              <div id="wpsuper-slider" className="wave-one gradient-blue">
                  <div className="wpsuper-single-slide">
                      <div className="container">
                          <div className="row">
                              <div className="col-sm-12">
                                  <div className="slide-content-wrapper">
                                      <div className="slide-content text-left">
                                          <h3 className="slide-subtitle" data-animation="fadeIn" data-delay="300ms">Welcome
                                              to</h3>
                                          <h2 className="slide-title" data-animation="fadeIn" data-delay="500ms">New generation
                                              crypto currency wallet</h2>
                                          <p className="slide-description" data-animation="fadeIn" data-delay="700ms">There are
                                              many variations of passages of Lorem Ipsum available, <br /> but the majority have
                                              suffered alteration.</p>
                                          <a href="#" className="btn btn-gradient btn-active" data-animation="fadeInLeft"
                                             data-delay="900ms">purchase Now</a>
                                          <a href="#" className="btn btn-gradient" data-animation="fadeIn" data-delay="1110ms"><i
                                                  className="fa fa-play"></i> Watch Video</a>
                                      </div>
                                      <div className="slide-thumbnail-image" data-animation="fadeInUp" data-delay="300ms">
                                          <img src="images/slider/1-1.png" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="wpsuper-single-slide">
                      <div className="container">
                          <div className="row">
                              <div className="col-sm-12">
                                  <div className="slide-content-wrapper">
                                      <div className="slide-content text-left">
                                          <h3 className="slide-subtitle" data-animation="fadeIn" data-delay="300ms">Welcome
                                              to</h3>
                                          <h2 className="slide-title" data-animation="fadeIn" data-delay="500ms">Best mobile app
                                              landing page of 2019</h2>
                                          <p className="slide-description" data-animation="fadeIn" data-delay="700ms">Lorem ipsum
                                              dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt
                                              ut labore et dolore magna aliqua.</p>
                                          <a href="#" className="btn btn-gradient btn-active" data-animation="fadeInLeft"
                                             data-delay="900ms">purchase Now</a>
                                          <a href="#" className="btn btn-gradient" data-animation="fadeIn" data-delay="1110ms"><i
                                                  className="fa fa-play"></i> Watch Video</a>
                                      </div>
                                      <div className="slide-thumbnail-image" data-animation="fadeInUp" data-delay="800ms">
                                          <img src="images/slider/2.png" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <section className="main-content">
              <div id="service" className="service-section">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4 col-md-6">
                              <div className="single-service wow fadeIn" data-wow-delay=".2s">
                                  <div className="service-icon">
                                      <img src="images/services/1-1.png" alt="" />
                                  </div>
                                  <div className="service-content">
                                      <h5>Online Payment</h5>
                                      <p>Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod teporara
                                          incididunt ugt labore.</p>
                                      <a href="#" className="button-link">Read More <i className="fa fa-angle-right"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="single-service wow fadeIn" data-wow-delay=".4s">
                                  <div className="service-icon">
                                      <img src="images/services/3-3.png" alt="" />
                                  </div>
                                  <div className="service-content">
                                      <h5>100% Secure</h5>
                                      <p>Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod teporara
                                          incididunt ugt labore.</p>
                                      <a href="#" className="button-link">Read More <i className="fa fa-angle-right"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 d-md-none d-lg-block">
                              <div className="single-service wow fadeIn" data-wow-delay=".6s">
                                  <div className="service-icon">
                                      <img src="images/services/2-2.png" alt="" />
                                  </div>
                                  <div className="service-content">
                                      <h5>Unlimited Withdraw</h5>
                                      <p>Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod teporara
                                          incididunt ugt labore.</p>
                                      <a href="#" className="button-link">Read More <i className="fa fa-angle-right"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="about" className="standard-section section-gray">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 col-xl-7">
                              <div className="video-image wow fadeInUp" data-wow-delay=".4s">
                                  <img src="images/video/1.svg" alt="" />
                                  <div className="video-play-icon">
                                      <a className="wpsuper-lightbox-video" data-vbtype="video"
                                         href="https://www.youtube.com/watch?v=IzIlR5kWU0w">
                                          <i className="fa fa-play"></i>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6 col-xl-5 align-items-center d-flex">
                              <div className="video-content wow fadeIn" data-wow-delay=".4s">
                                  <h3 className="video-subtitle">download</h3>
                                  <h2 className="video-title">cryptocurrency wallet</h2>
                                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                                      commodi, cum necessitatibus ea quia accusamus
                                      blanditiis dolore dolorem ad voluptate, distinctio adipisci! Tenetur iusto.</p>
                                  <div className="button-group">
                                      <a href="#" className="btn btn-download btn-gradient btn-active">
                                          <img src="images/icons/apple-dark.png" alt="" />
                                          <img src="images/icons/apple-white.png" alt="" />
                                      </a>
                                      <a href="#" className="btn btn-download btn-gradient">
                                          <img src="images/icons/google-dark.png" alt="" />
                                          <img src="images/icons/google-white.png" alt="" />
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="features" className="features-section section-white standard-section">
                  <ul className="wpsuper-xs-iocns">
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/1.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/2.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/3.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/4.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/5.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/6.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/7.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/8.png" alt="BX Icon" /></li>
                  </ul>
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="area-heading text-center">
                                  <h2 className="area-title">exclusive features</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci
                                      facilis. Delectus non, accusamus nostrum necessitatibus, quae earum.</p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg col-md-6">
                              <div className="featurs-style-1 text-right">
                                  <div className="single-featur wow fadeIn" data-wow-delay=".2s">
                                      <div className="app-header">
                                          <h5>Secure Login</h5>
                                          <i className="bi bi-ghost"></i>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, non, deserunt quod
                                          voluptatum obcaecati dicta.</p>
                                  </div>
                                  <div className="single-featur wow fadeIn" data-wow-delay=".3s">
                                      <div className="app-header">
                                          <h5>Instant transfer</h5>
                                          <i className="bi bi-linux"></i>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, non, deserunt quod
                                          voluptatum obcaecati dicta.</p>
                                  </div>
                                  <div className="single-featur wow fadeIn" data-wow-delay=".4s">
                                      <div className="app-header">
                                          <h5>Data Analysis</h5>
                                          <i className="bi bi-spa-face"></i>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, non, deserunt quod
                                          voluptatum obcaecati dicta.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-5 d-none d-sm-none d-lg-block">
                              <div className="app-feature-bg text-center wow fadeInUp" data-wow-delay=".3s"
                                   data-rellax-speed="-2">
                                  <img className="app-bg img-fluid" src="images/bg/2.png" alt="" />
                              </div>
                          </div>
                          <div className="col-lg col-md-6">
                              <div className="featurs-style-1 text-left">
                                  <div className="single-featur wow fadeIn" data-wow-delay=".2s">
                                      <div className="app-header">
                                          <h5>Free transaction</h5>
                                          <i className="bi bi-worker-cap"></i>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, non, deserunt quod
                                          voluptatum obcaecati dicta.</p>
                                  </div>
                                  <div className="single-featur wow fadeIn" data-wow-delay=".3s">
                                      <div className="app-header">
                                          <h5>Analysis informations</h5>
                                          <i className="bi bi-drawer"></i>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, non, deserunt quod
                                          voluptatum obcaecati dicta.</p>
                                  </div>
                                  <div className="single-featur wow fadeIn" data-wow-delay=".4s">
                                      <div className="app-header">
                                          <h5>Beautiful interface</h5>
                                          <i className="bi bi-smart-watch"></i>
                                      </div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, non, deserunt quod
                                          voluptatum obcaecati dicta.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="standard-section section-gray">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="area-heading text-center">
                                  <h2 className="area-title">awesome interface</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci
                                      facilis. Delectus non, accusamus nostrum necessitatibus, quae earum.</p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="interface-slide wow fadeInDown" data-wow-delay=".2s">
                                  <div className="swiper-container interface-slider">
                                      <div className="swiper-wrapper">
                                          <div className="swiper-slide">
                                              <div className="xboo__overlay">
                                                  <img src="images/screenshot/1.jpg" alt="" />
                                                  <a className="interface-icon wpsuper-lightbox" data-gall="myGallery"
                                                     href="images/screenshot/1.jpg"><i className="fa fa-image"></i></a>
                                              </div>
                                          </div>
                                          <div className="swiper-slide">
                                              <div className="xboo__overlay">
                                                  <img src="images/screenshot/2.jpg" alt="" />
                                                  <a className="interface-icon wpsuper-lightbox" data-gall="myGallery"
                                                     href="images/screenshot/2.jpg"><i className="fa fa-image"></i></a>
                                              </div>
                                          </div>
                                          <div className="swiper-slide">
                                              <div className="xboo__overlay">
                                                  <img src="images/screenshot/3.jpg" alt="" />
                                                  <a className="interface-icon wpsuper-lightbox" data-gall="myGallery"
                                                     href="images/screenshot/3.jpg"><i className="fa fa-image"></i></a>
                                              </div>
                                          </div>
                                          <div className="swiper-slide">
                                              <div className="xboo__overlay">
                                                  <img src="images/screenshot/4.jpg" alt="" />
                                                  <a className="interface-icon wpsuper-lightbox" data-gall="myGallery"
                                                     href="images/screenshot/4.jpg"><i className="fa fa-image"></i></a>
                                              </div>
                                          </div>
                                          <div className="swiper-slide">
                                              <div className="xboo__overlay">
                                                  <img src="images/screenshot/5.jpg" alt="" />
                                                  <a className="interface-icon wpsuper-lightbox" data-gall="myGallery"
                                                     href="images/screenshot/5.jpg"><i className="fa fa-image"></i></a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="swiper-pagination"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="pricing" className="standard-section section-white">
                  <div className="container">
                      <div className="row">
                          <div className="col-xl-5 col-lg-4 col-md-12">
                              <div className="area-heading text-left heading-full mt-110">
                                  <h2 className="area-title">pricing plan</h2>
                                  <p>You were put on this earth to achieve your greatest self, to live out your purpose, and
                                      to do it courageously and very simple.</p>
                                  <div className="offer-content">
                                      <p>Do you need in special offer?</p>
                                      <a href="#" className="btn btn-gradient btn-active">contact us</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-7 col-lg-8 col-md-12">
                              <div className="pricing-tables">
                                  <div className="single-pricing-table wow fadeInRight" data-wow-delay=".2s">
                                      <div className="pricing-head">
                                          <h2 className="pricing-title">Pro</h2>
                                          <p>$9.99</p>
                                      </div>
                                      <div className="pricing-body">
                                          <p>Build your schedule every day</p>
                                          <ul className="pricing-list">
                                              <li><i className="fa fa-check"></i>Unlimited user</li>
                                              <li><i className="fa fa-check"></i>Social activity analytics</li>
                                              <li><i className="fa fa-check"></i>customr care</li>
                                          </ul>
                                      </div>
                                      <div className="pricing-footer">
                                          <a href="#" className="btn btn-gradient btn-gradient-reverse">Get started</a>
                                      </div>
                                  </div>
                                  <div className="single-pricing-table wow fadeIn" data-wow-delay=".3s">
                                      <div className="pricing-head">
                                          <h2 className="pricing-title">Starter</h2>
                                          <p>Free</p>
                                      </div>
                                      <div className="pricing-body">
                                          <p>Make your life better</p>
                                          <ul className="pricing-list">
                                              <li><i className="fa fa-check"></i>Limited user</li>
                                              <li><i className="fa fa-check"></i>Social activity analytics</li>
                                          </ul>
                                      </div>
                                      <div className="pricing-footer">
                                          <a href="#" className="btn btn-gradient btn-gradient-reverse">Get started</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="counter-section ptb-100 bg-img bg-img-1 gradient-op-overlay">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-3 col-md-6">
                              <div className="single-counter">
                                  <div className="counter-icon">
                                      <i className="bi bi-emo-smile"></i>
                                  </div>
                                  <p className="counter" data-direction="up" data-interval="1" data-format="710">0</p>
                                  <h4 className="counter-title">Happy Clients</h4>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                              <div className="single-counter">
                                  <div className="counter-icon">
                                      <i className="bi bi-crown"></i>
                                  </div>
                                  <p className="counter" data-direction="up" data-interval="1" data-format="820">0</p>
                                  <h4 className="counter-title">award winners</h4>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                              <div className="single-counter">
                                  <div className="counter-icon">
                                      <i className="bi bi-cup-coffee"></i>
                                  </div>
                                  <p className="counter" data-direction="up" data-interval="1" data-format="945">0</p>
                                  <h4 className="counter-title">Working hours</h4>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                              <div className="single-counter">
                                  <div className="counter-icon">
                                      <i className="bi bi-office-bag"></i>
                                  </div>
                                  <p className="counter" data-direction="up" data-interval="1" data-format="920">0</p>
                                  <h4 className="counter-title">projects done</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="faq" className="section-white standard-section faq-section">
                  <ul className="wpsuper-xs-iocns">
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/1.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/2.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/3.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/4.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/5.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/6.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/7.png" alt="BX Icon" /></li>
                      <li className="wpsuper-icon rellax"><img src="images/bg/icons/8.png" alt="BX Icon" /></li>
                  </ul>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 d-none d-sm-block d-md-none d-lg-block">
                              <div className="faq-image text-center wow fadeIn" data-wow-delay=".2s">
                                  <img src="images/bg/1.png" alt="" />
                              </div>
                          </div>
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="faq-header clearfix">
                                  <div className="area-heading heading-full area-heading-2 text-left">
                                      <h2 className="area-title">frequent questions</h2>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi,
                                          adipisci facilis. Delectus non, accusamus nostrum necessitatibus, quae earum.</p>
                                  </div>
                              </div>
                              <div className="faq-content">
                                  <div id="accordion" role="tablist" className="panel-group">
                                      <div className="panel">
                                          <div className="panel-heading" role="tab" id="headingOne">
                                              <h5 className="panel-title">
                                                  <a data-toggle="collapse" href="#collapseOne" aria-expanded="true"
                                                     aria-controls="collapseOne"><i className="bi bi-microphone2"></i>
                                                      How can I use gxap?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapseOne" className="collapse show" role="tabpanel"
                                               aria-labelledby="headingOne" data-parent="#accordion">
                                              <div className="panel-body">
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam consectetur
                                                  a, ex, quos aliquid ducimus quidem ullam quis, commodi blanditiis harum
                                                  eaque inventore placeat. Consequatur quas corrupti et nulla alias.
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel">
                                          <div className="panel-heading" role="tab" id="headingTwo">
                                              <h5 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" href="#collapseTwo"
                                                     aria-expanded="false" aria-controls="collapseTwo"><i
                                                          className="bi bi-alien-gun"></i>
                                                      How to set up account?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo"
                                               data-parent="#accordion">
                                              <div className="panel-body">
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum
                                                  quibusdam velit, optio voluptatem ipsam repudiandae, natus blanditiis vero.
                                                  Illo aliquid quae, voluptatem voluptatum fugiat ullam eveniet. Hic, facere,
                                                  doloremque.
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel">
                                          <div className="panel-heading" role="tab" id="headingThree">
                                              <h5 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" href="#collapseThree"
                                                     aria-expanded="false" aria-controls="collapseThree"><i
                                                          className="bi bi-anchor"></i>
                                                      Why gxap is it difference than others?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapseThree" className="collapse" role="tabpanel"
                                               aria-labelledby="headingThree" data-parent="#accordion">
                                              <div className="panel-body">
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste suscipit,
                                                  voluptates alias vero eius voluptatum eveniet explicabo magni, laboriosam
                                                  itaque unde inventore vitae quo aut quis sapiente dolorem ex. Modi!
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel">
                                          <div className="panel-heading" role="tab" id="headingFour">
                                              <h5 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" href="#collapseFour"
                                                     aria-expanded="false" aria-controls="collapseFour"><i
                                                          className="bi bi-flag"></i>
                                                      How to send payment from my account?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapseFour" className="collapse" role="tabpanel"
                                               aria-labelledby="headingFour" data-parent="#accordion">
                                              <div className="panel-body">
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste suscipit,
                                                  voluptates alias vero eius voluptatum eveniet explicabo magni, laboriosam
                                                  itaque unde inventore vitae quo aut quis sapiente dolorem ex. Modi!
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="standard-section section-gray">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="area-heading text-center">
                                  <h2 className="area-title">Our Testimonial</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci
                                      facilis. Delectus non, accusamus nostrum necessitatibus, quae earum.</p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-10 offset-md-1 col-sm-12 offset-sm-0">
                              <div className="testimonial-wrapper  wow fadeInUp" data-wow-delay=".2s">
                                  <div className="testimonial-images">
                                      <div className="single-testimonial-image">
                                          <img src="images/team/1.jpg" alt="" />
                                      </div>
                                      <div className="single-testimonial-image">
                                          <img src="images/team/2.jpg" alt="" />
                                      </div>
                                      <div className="single-testimonial-image">
                                          <img src="images/team/3.jpg" alt="" />
                                      </div>
                                      <div className="single-testimonial-image">
                                          <img src="images/team/4.jpg" alt="" />
                                      </div>
                                  </div>
                                  <div className="testimonial-content">
                                      <div className="single-testimonial-content">
                                          <blockquote>
                                              <div className="testimonial-meta">
                                                  <h4>Dianne Ameter</h4>
                                                  <p>Founder & CEO</p>
                                              </div>
                                              <p>Minus minim! Corporis exercitation earum interdum molestiae consequat, beatae
                                                  odio fringilla penatibus perferendis voluptas accusamus eiusmod dapibus elit
                                                  quasi mollit, id illo convallis nam suscipit aperiam, ullam consequatur
                                                  laborum.</p>
                                          </blockquote>
                                      </div>
                                      <div className="single-testimonial-content">
                                          <blockquote>
                                              <div className="testimonial-meta">
                                                  <h4>Atik Israk</h4>
                                                  <p>Founder & CEO</p>
                                              </div>
                                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, delectus
                                                  numquam veniam deserunt amet ut sunt recusandae praesentium ratione facilis
                                                  dolores facere magni culpa nobis dolorem fugit? Fugit, sequi molestias.</p>
                                          </blockquote>
                                      </div>
                                      <div className="single-testimonial-content">
                                          <blockquote>
                                              <div className="testimonial-meta">
                                                  <h4>Aziz Khan</h4>
                                                  <p>Founder & CEO</p>
                                              </div>
                                              <p>Minus minim! Corporis exercitation earum interdum molestiae consequat, beatae
                                                  odio fringilla penatibus perferendis voluptas accusamus eiusmod dapibus elit
                                                  quasi mollit, id illo convallis nam suscipit aperiam, ullam consequatur
                                                  laborum.</p>
                                          </blockquote>
                                      </div>
                                      <div className="single-testimonial-content">
                                          <blockquote>
                                              <div className="testimonial-meta">
                                                  <h4>Rubel Rana</h4>
                                                  <p>Founder & CEO</p>
                                              </div>
                                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam
                                                  animi unde minima dolore nam recusandae quia nisi inventore, aut quos id
                                                  sint molestias nihil, est distinctio architecto. Repudiandae, ipsum.</p>
                                          </blockquote>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="branding-section section-gray pb-80">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="branding-slider">
                                  <div className="single-brand">
                                      <img src="images/brand/1.png" alt="" />
                                  </div>
                                  <div className="single-brand">
                                      <img src="images/brand/2.png" alt="" />
                                  </div>
                                  <div className="single-brand">
                                      <img src="images/brand/3.png" alt="" />
                                  </div>
                                  <div className="single-brand">
                                      <img src="images/brand/4.png" alt="" />
                                  </div>
                                  <div className="single-brand">
                                      <img src="images/brand/5.png" alt="" />
                                  </div>
                                  <div className="single-brand">
                                      <img src="images/brand/1.png" alt="" />
                                  </div>
                                  <div className="single-brand">
                                      <img src="images/brand/2.png" alt="" />
                                  </div>
                                  <div className="single-brand">
                                      <img src="images/brand/3.png" alt="" />
                                  </div>
                                  <div className="single-brand">
                                      <img src="images/brand/4.png" alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="blog" className="standard-section section-white">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="area-heading text-center">
                                  <h2 className="area-title">From Our Blog</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum modi, adipisci
                                      facilis. Delectus non, accusamus nostrum necessitatibus, quae earum.</p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6 col-lg-4">
                              <div className="post wow fadeInUp" data-wow-delay=".2s">
                                  <div className="post-thumbnail">
                                      <a href="#"><img src="images/blog/1.jpg" alt="" /></a>
                                  </div>
                                  <div className="post-content">
                                      <ul className="post-meta">
                                          <li><a href="#"><i className="bi bi-male"></i>Admin</a></li>
                                          <li><a href="#"><i className="bi bi-calendar"></i>19 Feb 2019</a></li>
                                          <li><a href="#"><i className="bi bi-pin"></i>Robotics</a></li>
                                      </ul>
                                      <h2 className="post-title"><a href="single-post.html">Lorem ipsum dolor sit amet,
                                          consectetur.</a></h2>
                                      <a href="single-post.html" className="btn btn-gradient btn-gradient-reverse">Read More <i
                                              className="fa fa-angle-right"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                              <div className="post wow fadeInUp" data-wow-delay=".3s">
                                  <div className="post-thumbnail">
                                      <a href="#"><img src="images/blog/2.jpg" alt="" /></a>
                                  </div>
                                  <div className="post-content">
                                      <ul className="post-meta">
                                          <li><a href="#"><i className="bi bi-male"></i>Admin</a></li>
                                          <li><a href="#"><i className="bi bi-calendar"></i>19 Feb 2019</a></li>
                                          <li><a href="#"><i className="bi bi-pin"></i>Robotics</a></li>
                                      </ul>
                                      <h2 className="post-title"><a href="single-post.html">Lorem ipsum dolor sit amet,
                                          consectetur.</a></h2>
                                      <a href="single-post.html" className="btn btn-gradient btn-gradient-reverse">Read More <i
                                              className="fa fa-angle-right"></i></a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 d-md-none d-lg-block col-lg-4">
                              <div className="post wow fadeInUp" data-wow-delay=".4s">
                                  <div className="post-thumbnail">
                                      <a href="#"><img src="images/blog/3.jpg" alt="" /></a>
                                  </div>
                                  <div className="post-content">
                                      <ul className="post-meta">
                                          <li><a href="#"><i className="bi bi-male"></i>Admin</a></li>
                                          <li><a href="#"><i className="bi bi-calendar"></i>19 Feb 2019</a></li>
                                          <li><a href="#"><i className="bi bi-pin"></i>Robotics</a></li>
                                      </ul>
                                      <h2 className="post-title"><a href="single-post.html">Lorem ipsum dolor sit amet,
                                          consectetur.</a></h2>
                                      <a href="single-post.html" className="btn btn-gradient btn-gradient-reverse">Read More <i
                                              className="fa fa-angle-right"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="started-section subscribe-section ptb-100 bg-img bg-img-1 gradient-op-overlay">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="subscribe-content text-center">
                                  <div className="subscribe-header">
                                      <h2>Subscribe to our newsletter</h2>
                                      <p>Discover classic and brand new styles in a variety of shapes</p>
                                  </div>
                                  <form className="subscribe-form" method="POST">
                                      <input name="email" placeholder="Your Email Address" type="email" />
                                      <button className="subscribe-btn btn btn-gradient btn-gradient-reverse" type="submit">
                                          Subscribe
                                          <i className="fa fa-paper-plane"></i>
                                      </button>
                                  </form>
                                  <p className="fun-heading">Hola! We are social.</p>
                                  <ul className="social-bookmark list-center list-white">
                                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                      <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                      <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="contact" className="standard-section section-white pb-0">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="area-heading text-center">
                                  <h2 className="area-title">Get in touch</h2>
                                  <p>Explain to you how all this mistaken idea of denouncing a teachings of the great explorer
                                      of the truth Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md">
                              <div className="single-contact wow fadeInRight" data-wow-delay=".2s">
                                  <div className="info-icon">
                                      <i className="bi bi-location-pointer"></i>
                                  </div>
                                  <div className="info-details">
                                      <h4>Address</h4>
                                      <p>1 Hacker Way, Menlo park,</p>
                                      <p>New York City, USA</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md">
                              <div className="single-contact wow fadeInRight" data-wow-delay=".3s">
                                  <div className="info-icon">
                                      <i className="bi bi-phone"></i>
                                  </div>
                                  <div className="info-details">
                                      <h4>Phone</h4>
                                      <p>+8804 545 989 626</p>
                                      <p>+8804 234 631 632</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md">
                              <div className="single-contact wow fadeInRight" data-wow-delay=".4s">
                                  <div className="info-icon">
                                      <i className="bi bi-paper-plane"></i>
                                  </div>
                                  <div className="info-details">
                                      <h4>Email</h4>
                                      <a href="#">info@example.com</a>
                                      <a href="#">help@yoursite.com</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-12 col-lg-10 offset-lg-1">
                              <div className="contact-message wow fadeIn" data-wow-delay=".2s">
                                  <h2 className="area-title">Send your message</h2>
                                  <form id="gxap-contact-form" action="php/mail.php" method="POST">
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="form-group">
                                                  <input type="text" name="name" className="form-control" id="name"
                                                         placeholder="Your Name" required />
                                                  <div className="form-grad-border"></div>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="form-group">
                                                  <input type="email" name="email" className="form-control" id="email"
                                                         placeholder="Email Address" required />
                                                  <div className="form-grad-border"></div>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="form-group">
                                                  <input type="text" name="subject" className="form-control"
                                                         placeholder="Your Subject" required />
                                                  <div className="form-grad-border"></div>
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="form-group">
                                                  <input type="tel" name="phone" className="form-control" placeholder="Your Phone"
                                                         required />
                                                  <div className="form-grad-border"></div>
                                              </div>
                                          </div>
                                          <div className="col-md-12">
                                              <div className="form-group">
                                                  <textarea name="message" className="form-control" rows="3"
                                                            placeholder="Write Message" required></textarea>
                                                  <div className="form-grad-border"></div>
                                              </div>
                                              <button type="submit" className="btn btn-gradient btn-gradient-reverse">send
                                                  message
                                              </button>
                                              <p className="form-send-message"></p>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="gxap-map"></div>
          </section>
          <footer className="theme-footer-section footer-light">
              <div className="footer-top-area">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4 col-md-6">
                              <aside className="footer-widget">
                                  <div className="footer-logo-heading">
                                      <a className="footer-logo" href="index.html">gxap<i className="fa fa-play"></i></a>
                                  </div>
                                  <div className="footer-widget-content">
                                      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim deserunt quia quis
                                          explicabo itaque nostrum unde, porro quibusdam vitae repudiandae!</p>
                                      <ul className="social-bookmark left">
                                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                          <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                          <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                      </ul>
                                  </div>
                              </aside>
                          </div>
                          <div className="col-lg col-md-6">
                              <aside className="footer-widget pl-5">
                                  <h3 className="footer-widget-title">quick links</h3>
                                  <div className="footer-widget-content">
                                      <ul className="quick-link">
                                          <li><a href="#">Support</a></li>
                                          <li><a href="#">Contact</a></li>
                                          <li><a href="#">Privacy & terms</a></li>
                                          <li><a href="#">Sitemap</a></li>
                                      </ul>
                                  </div>
                              </aside>
                          </div>
                          <div className="col-lg col-md-6">
                              <aside className="footer-widget pl-4">
                                  <h3 className="footer-widget-title">download now</h3>
                                  <div className="footer-widget-content">
                                      <div className="download-icon">
                                          <ul className="download-icon-menu">
                                              <li><a href="#"><img src="images/icons/app-store.png" alt="" /></a></li>
                                              <li><a href="#"><img src="images/icons/gplay.png" alt="" /></a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </aside>
                          </div>
                          <div className="col-lg col-md-6">
                              <aside className="footer-widget">
                                  <h3 className="footer-widget-title">Address</h3>
                                  <div className="footer-widget-content quick-address">
                                      <p>Awesome Company.</p>
                                      <p> Reno, New York City, USA</p>
                                      <p>+880044 545 989 626</p>
                                      <a href="#">info@example.com</a>
                                  </div>
                              </aside>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-bottom-area">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-5">
                              <div className="copy-right-info">
                                  <p>&copy; 2019 All right reserved by
                                      <a href="#">wpsuper</a>
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-7">
                              <ul className="footer-menu">
                                  <li><a href="#">home</a></li>
                                  <li><a href="#">about</a></li>
                                  <li><a href="#">causes</a></li>
                                  <li><a href="#">event</a></li>
                                  <li><a href="#">gallery</a></li>
                                  <li><a href="#">contact</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
