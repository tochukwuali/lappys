import React, { Component } from "react";
import {
  MdDirectionsBike,
  MdBusinessCenter,
  MdViewDay,
  MdCardTravel
} from "react-icons/md";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <MdBusinessCenter />,
        title: "Free Consultation",
        info:
          "Our team of experienced individuals will walk you through the pros and cons of which ever device you chose. They'll offer exprt advice on the device that will match your needs "
      },
      {
        icon: <MdCardTravel />,
        title: "Discounts",
        info:
          "We offer discount on the products that we sell. We bear in mind that all fingers are not equal and we are commited to providing an affordable price for our customers. This we do via discount offerings."
      },
      {
        icon: < MdViewDay/>,
        title: "6 months Warranty",
        info:
          "We ensure that your laptop serves you well within the first 6 months and offer specialised exchange and repair services in that regard."
      },
      {
        icon: <MdDirectionsBike />,
        title: "Free Delivery",
        info:
          "We deliver to any location within Nigeria free of charge. Delivery outside of Nigeria may incure costs depending on the distance of the place from Nigeria."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
