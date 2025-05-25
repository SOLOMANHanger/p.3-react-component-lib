import React from "react";
import "./Hero.module.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">The Brewbeck Bravado</h1>
        <p className='hero__subtitle'>
          ▞ ⁱⁿ ᵃˢˢᵒᶜⁱᵃᵗⁱᵒⁿ ʷⁱᵗʰ Ｄｒ．Ａｗｋｃａｂ  🅴.  Ｓｅｖｅｒ
        </p>
        <button className="hero__cta">𝙇𝙀𝘼𝙍𝙉 𝙈𝙊𝙍𝙀</button>
      </div>
    </div>
  );
}
