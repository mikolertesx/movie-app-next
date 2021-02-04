import React from "react";
import Sidemenu from "../components/sidemenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";

const Home = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Sidemenu />
        </div>
        <div className="col-lg-9">
          <Carousel></Carousel>
          <div className="row">
            <MovieList></MovieList>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
