"use client";
import React, { useState, useEffect, FC } from "react";
import style from "../../styles/home.module.css";
import { Countdown } from "../ui";
import { calculateTimeLeft } from "@/lib/helpers";

export interface IHero {
  title: string;
  description: string;
  button: {
    label: string;
    action?: () => void;
  };
}

const Hero: FC<IHero> = (props: IHero) => {
  const { title, description, button } = props;

  const [birthdayCountdown, setBirthdayCountdown] = useState(
    calculateTimeLeft("April 11, 2024 00:00:00")
  );
  const [jbCountdown, setJbCountdown] = useState(
    calculateTimeLeft("April 25, 2024 21:00:00")
  );

  useEffect(() => {
    const birthDaytimer = setTimeout(() => {
      setBirthdayCountdown(calculateTimeLeft("April 11, 2024 00:00:00"));
    }, 1000);
    return () => clearTimeout(birthDaytimer);
  });

  useEffect(() => {
    const jbtimer = setTimeout(() => {
      setJbCountdown(calculateTimeLeft("April 25, 2024 21:00:00"));
    }, 1000);
    return () => clearTimeout(jbtimer);
  });

  return (
    <>
      <div
        style={{ boxSizing: "border-box" }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content text-center">
          <div>
            <article className="prose lg:prose-xl">
              <h1>
                Holissssssssss. <span className={style.wave}>👋🏼</span>
              </h1>
            </article>
            <div className="mt-12 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
              <div className="group relative">
                <div
                  style={{
                    padding: "10px 20px 30px 20px",
                    boxSizing: "border-box",
                  }}
                  className="relative w-full overflow-hidden rounded-lg bg-base-300"
                >
                  <div>
                    <article className="prose lg:prose-md">
                      <p style={{ margin: "10px 0", fontWeight: "400" }}>
                        Esto falta para tu cumple 🥳
                      </p>
                    </article>
                    <Countdown timeLeft={birthdayCountdown} />
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div
                  style={{
                    padding: "10px 20px 30px 20px",
                    boxSizing: "border-box",
                  }}
                  className="relative w-full overflow-hidden rounded-lg bg-base-300"
                >
                  <div>
                    <article className="prose lg:prose-md">
                      <p style={{ margin: "10px 0", fontWeight: "400" }}>
                        Esto falta para los Jonas 🎵
                      </p>
                    </article>
                    <Countdown timeLeft={jbCountdown} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
