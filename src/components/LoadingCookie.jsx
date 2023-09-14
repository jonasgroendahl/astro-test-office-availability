import Lottie from "lottie-react";
import cookie from "../../assets/cookie.json";

export const LoadingCookie = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p class="instructions">Shaking cookies...</p>
      <Lottie
        animationData={cookie}
        loop={true}
        style={{ width: 300, height: 250 }}
      />
    </div>
  );
};
