import style from "./style.module.scss";
import { vars } from "@/shared/styles/vars";
import { Application } from "@pixi/react";
export const Field = () => {
  return (
    <div className={style.container}>
      <Application 
        resizeTo={parent}
        backgroundColor={vars.color_gray}
        backgroundAlpha={0}
        resolution={window.devicePixelRatio || 1}
      >
        
      </Application>
    </div>
  );
};