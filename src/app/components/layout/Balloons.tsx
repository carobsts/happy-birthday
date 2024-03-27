import { FC } from "react";
import style from "../../styles/home.module.css";
import Image from "next/image";
import yellow_balloon from "../../assets/globo_amarillo.webp";
import blue_balloon from "../../assets/globo_celeste.webp";
import red_balloon from "../../assets/globo_rojo.webp";
import pink_balloon from "../../assets/globo_rosa.webp";

const Balloons: FC<{}> = () => {
  return (
    <div>
      <div className={style.balloon}>
        <Image src={yellow_balloon} alt="balloon" />
      </div>
      <div className={style.balloon}>
        <Image src={blue_balloon} alt="balloon" />
      </div>
      <div className={style.balloon}>
        <Image src={red_balloon} alt="balloon" />
      </div>
      <div className={style.balloon}>
        <Image src={pink_balloon} alt="balloon" />
      </div>
    </div>
  );
};

export default Balloons;
