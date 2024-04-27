// import { Stack, styled } from "panda-css/jsx";
import { css } from "panda-css/css";

const a = css({
  color: "red",
  "&:hover": {
    color: "blue",
  },
});

export const App = () => {
  return (
    <div>
      <div className={a}>HELLO</div>
      <div className={a}>WORLD</div>
    </div>
  );
};
