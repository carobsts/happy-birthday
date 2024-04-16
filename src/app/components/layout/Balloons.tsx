import { FC } from "react";
import style from "../../styles/home.module.css";
import Image, { StaticImageData } from "next/image";
import yellow_balloon from "../../assets/globo_amarillo.webp";
import blue_balloon from "../../assets/globo_celeste.webp";
import red_balloon from "../../assets/globo_rojo.webp";
import pink_balloon from "../../assets/globo_rosa.webp";

const Balloons: FC<{}> = () => {
  const ballons: { src: StaticImageData; alt: string }[] = [
    {
      src: yellow_balloon,
      alt: "yellow_balloon",
    },
    {
      src: blue_balloon,
      alt: "blue_balloon",
    },
    {
      src: red_balloon,
      alt: "red_balloon",
    },
    {
      src: pink_balloon,
      alt: "pink_balloon",
    },
  ];
  return (
    <div>
      {ballons.map((balloon) => (
        <div style={{ zIndex: -1 }} key={balloon.alt} className={style.balloon}>
          <Image src={balloon.src} alt={balloon.alt} />
        </div>
      ))}
    </div>
  );
};

export default Balloons;
