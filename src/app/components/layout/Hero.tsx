"use client";
import React, { useState, useEffect, FC } from "react";
import style from "../../styles/home.module.css";
import { Countdown, Login } from "../ui";
import { calculateTimeLeft } from "@/lib/helpers";
import Link from "next/link";

export interface IHero {}

const Hero: FC<IHero> = () => {
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
        className="h-full"
        style={{ boxSizing: "border-box", width: "90%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="text-center">
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
                      <p style={{ margin: "10px 0", fontWeight: "400", color: "black" }}>
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
                      <p style={{ margin: "10px 0", fontWeight: "400", color: "black" }}>
                        Esto falta para los Jonas 🎵
                      </p>
                    </article>
                    <Countdown timeLeft={jbCountdown} />
                  </div>
                </div>
              </div>
            </div>
            <Login/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
