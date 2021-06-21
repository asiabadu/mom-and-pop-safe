import React from "react";
import Carousel from "react-elastic-carousel";
import TestimonialsItem from "./TestimonialsItem";
import ola from "../assets/photos/adolezik.jpg";
import domi from "../assets/photos/dponiedz.jpg";
import ewelina from "../assets/photos/egracz.JPG";
import jedrz from "../assets/photos/jpotocze.jpg";
import mat from "../assets/photos/mbugajsk.jpg";
import lesiak from "../assets/photos/mlesiak.jpg";
import marta from "../assets/photos/mwinieck.jpg";
import wwa from "../assets/photos/mwyzykow.jpg";
import nat from "../assets/photos/nszczypi.jpg";
import pati from "../assets/photos/pbar.jpg";
import wyczes from "../assets/photos/pwyczesa.jpg";
import wiki from "../assets/photos/wstelmac.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const Testimonials = () => {
  return (
    <div className="testimonials">
      <Carousel breakPoints={breakPoints}>
        <TestimonialsItem
          photo={ola}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={domi}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={ewelina}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={jedrz}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={mat}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={lesiak}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={marta}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={wwa}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={nat}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={pati}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={wyczes}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={wiki}
          name="Aleksandra Dolezik"
          company="Lorem"
          desc="Lorem ipsum dolor sit ahwauwhah hawdhaidhw ahwndihaidhw awhdnidawhiawdhii ahwifhiaw"
        ></TestimonialsItem>
      </Carousel>
    </div>
  );
};

export default Testimonials;
