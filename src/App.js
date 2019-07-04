/* eslint-disable */
import React, { Component } from 'react';
import icon from './assets/debut-app-icon.svg'
import debutInfo from './assets/debut_info.png'
import Icon from './components/Icon'
import identity from './assets/identity.jpg'
import profile from './assets/profile.png'
import collab from './assets/collab.jpg'
import mark1 from './assets/mark_1.png'
import facebook from './assets/facebook.png'
import facebook2 from './assets/facebook_2.png'
import facebook3 from './assets/facebook_3.png'
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
                      <p
                        className="navbar-brand"
                        href="index.html"
                        style={{
                          textTransform: 'lowercase',
                          marginBottom: '0',
                          marginRight: '10px'
                        }}
                      >
                          debut
                      </p>

                      <img src={icon} alt="svg" style={{ width: '50px', height: '50px' }}/>

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
                              <li><a className="nav-link" href="#features">Current Features</a></li>
                              <li><a className="nav-link" href="#faq">FAQ</a></li>
                              <li><a className="nav-link" href="#contact">Contact</a></li>
                              <li><a a href="https://debutapp.social/?landing=true" rel="noopener noreferrer">Sign up | Sign in</a></li>
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
                                              to a
                                          </h3>
                                          <h2 className="slide-title" data-animation="fadeIn" data-delay="500ms">
                                            New era of social networking
                                          </h2>
                                          <p className="slide-description" data-animation="fadeIn" data-delay="700ms">
                                            With current social networks like Facebook and Twitter, your data can be sold without your consent.
                                            Debut is switching that paradigm and letting the user have sole control of his or her data.
                                          </p>
                                          <p className="slide-description" data-animation="fadeIn" data-delay="700ms">
                                            <strong>Take control of your personal information</strong>
                                          </p>
                                      </div>
                                      <div className="slide-thumbnail-image" data-animation="fadeInUp" data-delay="300ms">
                                          <img
                                            src={debutInfo}
                                            alt="debut-info"
                                            style={{
                                              maxWidth: '800px',
                                              maxHeight: '635px'
                                            }}
                                          />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="standard-section section-gray">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="area-heading text-center">
                              <h2 class="area-title">Data Breach Examples</h2>
                              <p>
                                These articles are just a few examples of how applications like facebook are mishandling your data
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="interface-slide wow fadeInDown" data-wow-delay=".2s">
                              <div class="swiper-container interface-slider">
                                  <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                          <div class="xboo__overlay">
                                              <img src={mark1} alt="" style={{ height: '400px' }} />
                                              <a
                                                class="interface-icon wpsuper-lightbox"
                                                data-gall="myGallery"
                                                href="https://www.nytimes.com/2019/04/24/technology/facebook-ftc-fine-privacy.html"
                                                rel="noopener noreferrer"
                                                style={{ height: '100%', width: '100%', top: 0, transform: 'inherit' }}
                                                target="_blank"
                                              />
                                              <p style={{ textAlign: 'center' }}>Facebook Expects to Be Fined Up to $5 Billion by F.T.C. Over Privacy Issues</p>
                                          </div>
                                      </div>
                                      <div class="swiper-slide">
                                          <div class="xboo__overlay">
                                              <img src={facebook} alt="" style={{ height: '400px' }} />
                                              <a
                                                class="interface-icon wpsuper-lightbox"
                                                data-gall="myGallery"
                                                href="https://www.wired.com/story/facebook-passwords-plaintext-change-yours/"
                                                rel="noopener noreferrer"
                                                style={{ height: '100%', width: '100%', top: 0, transform: 'inherit' }}
                                                target="_blank"
                                              />
                                              <p style={{ textAlign: 'center' }}>FACEBOOK STORED MILLIONS OF PASSWORDS IN PLAINTEXT—CHANGE YOURS NOW</p>
                                          </div>
                                      </div>
                                      <div class="swiper-slide">
                                          <div class="xboo__overlay">
                                              <img src={facebook2} alt="" style={{ height: '400px' }} />
                                              <a
                                                class="interface-icon wpsuper-lightbox"
                                                data-gall="myGallery"
                                                href="https://www.nytimes.com/2019/04/25/technology/facebook-canada-privacy.html"
                                                rel="noopener noreferrer"
                                                style={{ height: '100%', width: '100%', top: 0, transform: 'inherit' }}
                                                target="_blank"
                                              />
                                              <p style={{ textAlign: 'center' }}>Canada Says Facebook Broke Privacy Laws With ‘Superficial’ Safeguards</p>
                                          </div>
                                      </div>
                                      <div class="swiper-slide">
                                          <div class="xboo__overlay">
                                              <img src={facebook3} alt="" style={{ height: '400px' }} />
                                              <a
                                                class="interface-icon wpsuper-lightbox"
                                                data-gall="myGallery"
                                                href="https://www.nytimes.com/2019/04/25/technology/facebook-regulation-ftc-fine.html"
                                                rel="noopener noreferrer"
                                                style={{ height: '100%', width: '100%', top: 0, transform: 'inherit' }}
                                                target="_blank"
                                              />
                                              <p style={{ textAlign: 'center' }}>Regulators Around the World Are Circling Facebook</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="swiper-pagination"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <section className="main-content">
              <div id="service" className="service-section">
                  <div class="area-heading text-center">
                    <h2 class="area-title">With <span style={{ textTransform: 'lowercase' }}>debut</span></h2>
                  </div>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4 col-md-6">
                              <div className="single-service wow fadeIn" data-wow-delay=".2s">
                                  <div className="service-icon">
                                    <Icon
                                      icon="IconProfile"
                                      size={45}
                                      color="#518DCA"
                                    />
                                  </div>
                                  <div className="service-content">
                                      <h5>Identity Ownership</h5>
                                      <p>
                                        Powered by Blockstack, you retain ownership of your identity and data.  The goal is to give control to the user, not the application.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="single-service wow fadeIn" data-wow-delay=".4s">
                                  <div className="service-icon">
                                    <Icon
                                      icon="IconEye"
                                      size={42}
                                      color="#518DCA"
                                    />
                                  </div>
                                  <div className="service-content">
                                      <h5>No Tracking</h5>
                                      <p>
                                        No 3rd party tracker is injected into debut.  No tracker means no specialized ads or data usage without consent.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 d-md-none d-lg-block">
                              <div className="single-service wow fadeIn" data-wow-delay=".6s">
                                  <div className="service-icon public-private">
                                    <Icon
                                      icon="IconCouple"
                                      size={42}
                                      color="#518DCA"
                                      />
                                    <Icon
                                      icon="IconWoman"
                                      size={42}
                                      color="#518DCA"
                                    />
                                  </div>
                                  <div className="service-content">
                                      <h5>Share publicly or <span style={{ color: '#EA1D64' }}>privately*</span><span style={{ color: '#EA1D64', fontSize: '12px' }}> *in development</span></h5>
                                      <p>
                                        Dictate and take control of your data.  You should have the ability to share public or private moments.  Encryption of data ensures only your trusted friends and family have access.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="features" className="standard-section section-gray">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="area-heading text-center">
                                  <h2 className="area-title">Current Features</h2>
                                  <p>
                                    Currently in <span style={{ color: "#EA1D64"}}>beta release</span>.  Features are updated constantly to ensure a seamless experience without compromising security
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg col-md-6">
                              <div className="featurs-style-1 text-right">
                                  <div className="single-featur wow fadeIn" data-wow-delay=".2s">
                                      <div className="app-header">
                                          <h5>Secured Login</h5>
                                          <i className="fa fa-sign-in"></i>
                                      </div>
                                      <p>
                                        Blockstack authentication ensures user identity name is protected and unique.
                                      </p>
                                  </div>
                                  <div className="single-featur wow fadeIn" data-wow-delay=".3s">
                                      <div className="app-header">
                                          <h5>Follow Users</h5>
                                          <i className="fa fa-search"></i>
                                      </div>
                                      <p>
                                        debut allows users to follow each other.  Following others allow you to see real time updates whenever a moment has been shared.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg col-md-6">
                              <div className="featurs-style-1 text-left">
                                  <div className="single-featur wow fadeIn" data-wow-delay=".2s">
                                      <div className="app-header">
                                          <h5>Discover User Apps</h5>
                                          <i className="fa fa-share"></i>
                                      </div>
                                      <p>
                                        Currently there is no good way to discover user apps in the Blockstack ecosystem.  debut is changing that by helping users connect outside of debut through chat, blog, or newsfeed applications.
                                      </p>
                                  </div>
                                  <div className="single-featur wow fadeIn" data-wow-delay=".2s" style={{ marginTop: '15px' }}>
                                    <div className="app-header">
                                        <h5>Seamless Interaction</h5>
                                        <i className="fa fa-pencil"></i>
                                    </div>
                                    <p>
                                      Users can easily comment and provide feedback with each other through shared moments.
                                    </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-white standard-section">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="area-heading text-center">
                                  <h2 className="area-title">Create a profile</h2>
                                  <p>
                                    Profiles are easy to create once you sign in!  You can edit your profile by adding a small description about yourself, update your profile image, and sharing moments.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="interface-slide wow fadeInDown" data-wow-delay=".2s">
                                  <div className="swiper-container interface-slider">
                                      <div className="swiper-wrapper profile-container">
                                        <img src={profile} alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="faq" className="standard-section section-gray faq-section">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6 d-none d-sm-block d-md-none d-lg-block">
                              <div className="faq-image text-center wow fadeIn" data-wow-delay=".2s">
                                  <img src={collab} alt="" style={{ width: '470px', height: '450px'}} />
                              </div>
                          </div>
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="faq-header clearfix">
                                  <div className="area-heading-2 text-left">
                                      <h2 className="area-title">frequent questions</h2>
                                  </div>
                              </div>
                              <div className="faq-content">
                                  <div id="accordion" role="tablist" className="panel-group">
                                      <div className="panel">
                                          <div className="panel-heading" role="tab" id="headingOne">
                                              <h5 className="panel-title">
                                                  <a data-toggle="collapse" href="#collapseOne" aria-expanded="true"
                                                     aria-controls="collapseOne">
                                                   How is debut different from facebook or twitter?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapseOne" className="collapse show" role="tabpanel"
                                               aria-labelledby="headingOne" data-parent="#accordion">
                                              <div className="panel-body">
                                                Unlike facebook and twitter, debut gives data control to the user, not the application.  Applications like facebook and twitter
                                                can sell your information for profit.  Users can post moments, add comments, and keep the benefits of data ownership.
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel">
                                          <div className="panel-heading" role="tab" id="headingTwo">
                                              <h5 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" href="#collapseTwo"
                                                     aria-expanded="false" aria-controls="collapseTwo">
                                                        What is Blockstack?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo"
                                               data-parent="#accordion">
                                              <div className="panel-body">
                                                Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and <a style={{ color: "#518DCA" }} href="https://youtu.be/qtOIh93Hvuw?t=449" rel="noopener noreferrer" target="_blank"> freedom</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="panel">
                                          <div className="panel-heading" role="tab" id="headingThree">
                                              <h5 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" href="#collapseThree"
                                                     aria-expanded="false" aria-controls="collapseThree">
                                                        What is gaia and how is data "secured"?
                                                  </a>
                                              </h5>
                                          </div>
                                          <div id="collapseThree" className="collapse" role="tabpanel"
                                               aria-labelledby="headingThree" data-parent="#accordion">
                                              <div className="panel-body">
                                                The Blockstack team has developed a decentralized high-performance storage system to allow users to store their data wherever they please.  Include but limited to S3, Azure, etc.  They have also created the foundation to allow users to encrypt and decrypt their data.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id="contact" className="standard-section section-white pb-100">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="area-heading text-center">
                                <h2 className="area-title">Get in touch</h2>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md">
                              <div className="single-contact wow fadeInRight" data-wow-delay=".3s">
                                  <div className="info-icon">
                                      <i className="fa fa-twitter"></i>
                                  </div>
                                  <div className="info-details">
                                      <h4>Twitter</h4>
                                      <a style={{ color: 'white' }}rel="noopener noreferrer" target="_blank" href="https://twitter.com/the_debut_app">@the_debut_app</a>
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
                                      <a href="mailto:thedebutapp@gmail.com">thedebutapp@gmail.com</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <footer className="theme-footer-section footer-light">
              <div className="footer-top-area">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4 col-md-6">
                              <aside className="footer-widget">
                                  <div className="footer-logo-heading">
                                      <a className="footer-logo" href="index.html" style={{ textTransform: 'lowercase'}}>debut</a>
                                      <img src={icon} alt="svg" style={{ width: '50px', height: '50px', marginLeft: '10px', marginBottom: '10px' }}/>
                                  </div>
                                  <div className="footer-widget-content">
                                      <p>
                                        Freely share information amongst friends and family without compromise. Only YOU as the user have access to your data.
                                      </p>
                                  </div>
                              </aside>
                          </div>
                          <div className="col-lg col-md-6">
                              <aside className="footer-widget pl-5">
                                  <h3 className="footer-widget-title">debut</h3>
                                  <div className="footer-widget-content">
                                      <ul className="quick-link">
                                          <li><a href="https://debutapp.social" rel="noopener noreferrer">Sign Up | Sign In</a></li>
                                          <li><a href="#features">Current Features</a></li>
                                          <li><a href="#faq">FAQ</a></li>
                                      </ul>
                                  </div>
                              </aside>
                          </div>
                          <div className="col-lg col-md-6">
                              <aside className="footer-widget pl-4">
                                <h3 className="footer-widget-title">Blockstack</h3>
                                <div className="footer-widget-content">
                                    <ul className="quick-link">
                                        <li><a href="https://blockstack.org/about/" rel="noopener noreferrer" target="_blank">Curious about Blockstack?</a></li>
                                        <li><a href="https://github.com/blockstack/gaia" rel="noopener noreferrer" target="_blank">Gaia & data storage</a></li>
                                        <li><a href="https://app.co/mining" rel="noopener noreferrer" target="_blank">App Mining</a></li>
                                    </ul>
                                </div>
                              </aside>
                          </div>
                          <div className="col-lg col-md-6">
                              <aside className="footer-widget">
                                <h3 className="footer-widget-title">Support</h3>
                                <div className="footer-widget-content">
                                    <ul className="quick-link">
                                        <li><a href="https://trello.com/b/he3qvtA0/debut" rel="noopener noreferrer" target="_blank">Current Roadmap</a></li>
                                    </ul>
                                </div>
                              </aside>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-bottom-area">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="copy-right-info">
                                <ul className="social-bookmark left">
                                    <li><a href="https://github.com/kkomaz/debut-server" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a></li>
                                    <li><a href="https://twitter.com/the_debut_app" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://producthunt.com/posts/debut-2" rel="noopener noreferrer" target="_blank"><i className="fa fa-product-hunt"></i></a></li>
                                </ul>
                              </div>
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
