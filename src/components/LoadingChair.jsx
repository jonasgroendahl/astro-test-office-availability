import Lottie from "lottie-react";
import chair from "../../assets/chair.json";

export const LoadingChair = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p class="instructions">Finding your chair...</p>
      <Lottie
        animationData={chair}
        loop={true}
        style={{ width: 300, height: 250 }}
      />
    </div>
  );
};
