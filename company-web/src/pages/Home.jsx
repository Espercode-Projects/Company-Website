import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="flex flex-col">
        <h1 className="h1 xl:text-8xl  text-5xl  ">Espercode</h1>
        <p className="xl:text-xl ">
          Siap membantu anda yang ingin berinovasi dalam memudahkan usaha yang
          dimiliki melalui web atau aplikasi berupa promosi ataupun layanan
        </p>
      </div>

      <div>
        <DotLottieReact src="/public/img/hero-lottie.lottie" loop autoplay />
      </div>
    </div>
  );
}

export default Home;
