import style from "./style.module.scss";
import { Field } from "@/widgets/field";
export const MapsPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Your Map</h1>
      <Field />
    </div>
  );
};
