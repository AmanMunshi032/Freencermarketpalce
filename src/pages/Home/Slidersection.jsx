import React from 'react';

const Slidersection = () => {
    return (
          <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://img.freepik.com/free-vector/v873-bb-1_53876-166692.jpg?t=st=1746382686~exp=1746386286~hmac=7fa13e9e2bef8f63f53ffb0ce6813cdde3fdd342649a8e653306fc21b0e2df0b&w=1380"
            className="md:w-full " />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1663957835183-a11d378f63b8?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" md:w-full " />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/1316930673_1221914-8085.jpg?w=1380"
            className=" md:w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/diverse-multiethnic-medical-workers-uniform-protective-masks-white-background_116547-53776.jpg?w=1380"
            className="md:w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Slidersection;