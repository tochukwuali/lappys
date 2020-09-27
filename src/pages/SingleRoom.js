import React, { Component } from "react";
import defaultBcg from "../images/lappys/dellCollection.jpg";
import Hero from "../components/Hero";
import {MdCall} from 'react-icons/md'
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such device could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to devices
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      storage,
      screensize,
      price,
      memory,
      images
    } = room;
    const [main, ...defaultImages] = images;

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              back to devices
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : N{price}</h6>
              <h6>screen size : {screensize} inches </h6>
              <h6>
                storage :
                {storage}
              </h6>
              <h6>RAM: {memory} </h6>
              
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Call us today </h6>
          <ul className="extras">
            {/* {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))} */}
            <li><MdCall /> (+234) 07067408738</li>
          </ul>
        </section>
      </>
    );
  }
}
