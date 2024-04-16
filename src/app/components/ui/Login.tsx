"use client";
import Link from 'next/link';
import { permanentRedirect } from 'next/navigation';
import { FC, useState } from "react";

const Login: FC<{}> = () => {

  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const handleSingIn = () => {
    if (user.toLowerCase() === "cumplañito" && pass.toLowerCase() === "bodoque") return true; 
    else return false;
  };

  return (
    <section className="mt-10">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ zIndex: 1, width: "50%", minWidth: 300 }} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                style={{ border: "none" }}
                type="text"
                className="grow"
                placeholder="Usuario"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                style={{ border: "none" }}
                type="password"
                className="grow"
                placeholder="Contraseña"
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
            </label>
            <div
              className="tooltip mt-6"
              data-tip="Acá vas a poder ver tus sorpresitas"
            >
              <div>
                <Link
                  href={handleSingIn() ? '/dashboard?tab=1' : '/'}
                  className="btn w-200 btn-accent group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 font-medium text-black duration-500"
                >
                  <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                    <span style={{ letterSpacing: 0.5, fontSize: 15 }}>
                      Ingresar ❤️
                    </span>
                  </div>
                  <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
