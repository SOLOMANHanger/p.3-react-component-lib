import React from "react";
import "./Pricing.module.scss";


const tiers = [
  { name: "Chips Ripple", price: "$", desc: "React Residency" },
  { name: "Tutankhamun", price: "$$", desc: "Toasting thrillseekers" },
  {
    name: "Marchy Bark",
    price: "$$$",
    desc: "Mystery Module ",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="pricing"
    >
      {tiers.map((tier) => (
        <article
          className="card"
          key={tier.name}
        >
          <h3>{tier.name}</h3>
          <p className="card__price">{tier.price}</p>
          <p className="card__desc">{tier.desc}</p>
          <button className="card__btn">Choose Phase</button>
        </article>
      ))}
    </section>
  );
}
