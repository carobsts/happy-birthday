"use client"
import { usePathname, useSearchParams, useRouter, redirect } from "next/navigation";
import { FC, ReactNode, Suspense } from "react";
import { Building, Tab1, Tab2 } from "../components/ui";
import Tab4 from "../components/ui/Tab4";

interface ITabs {
  ariaLabel: string;
  description: string;
  Component: ReactNode;
  tab: string;
  icon: string;
}

const Dashboard: FC<{}> = () => {

  let user: string = 'si';

  if (!user) return redirect('/'); 

  const data: string[] = [
    "4qu63nuBpdn0qHUHuObEj1",
    "22vgEDb5hykfaTwLuskFGD",
    "4inPxqHrj9VmjLx5JCDCV4",
    "0XM1XnOYv8BkFPFVCU8ZjX",
    "4wNIkl5XGiAACjFBlDWuSd",
    "22vgEDb5hykfaTwLuskFGD",
    "7yfi8B8opXjnRh4VZnOkz9",
    "0DiDStADDVh3SvAsoJAFMk",
    "1vYh9x8UmFTLbXiizk9Qc5",
    "2n6red10oCd6YhlEUp6jXy",
    "76F54HHrw84yqAYqrAJkbr",
    "24eP9hGnGR6RCQvllQVkCm",
    "2hgk8iKN9UdoM4ILlJ9F5N",
    "6DibqiBTKMob2SjBwKqRfS",
    "5MoU7TaAvgBa8W0XVwXAd7",
    "5md87aD3pGXRghKUbZdyh8",
    "7fiFJADUcHwTdYLmnZeLAy",
    "7dxKdQC9Vo1hDxIUnt1z0Q",
    "064tgRK6FYBwikCdxaHFV1"
  ];

  const randomIndex: number = Math.floor(Math.random() * data.length);
  const trackId = data[randomIndex];

  const tabs: ITabs[] = [
    {
      ariaLabel: "Libro de visitas.",
      description: "En esta sección, tenés algunos mensajitos que tus seres queridos te dejaron para que nunca olvides lo mucho que te quieren.",
      Component: <Tab1/>,
      tab: "1",
      icon: "M5 19V6.2C5 5.0799 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17H7C5.89543 17 5 17.8954 5 19ZM5 19C5 20.1046 5.89543 21 7 21H19M18 17V21M15 13.5C14.7164 12.3589 13.481 11.5 12 11.5C10.519 11.5 9.28364 12.3589 9 13.5M12 7.5H12.01M13 7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5C11 6.94772 11.4477 6.5 12 6.5C12.5523 6.5 13 6.94772 13 7.5Z",
    },
    {
      ariaLabel: "Tu canción recomendada de los Jonas.",
      description: "En esta sección, vas a poder encontrar tu canción recomendada de los Jonas, para que nunca se pierda la manija.",
      Component: <Suspense key={`${trackId}`} fallback={<div> Cargando ... </div>}><Tab4 trackId={trackId}/></Suspense>,
      tab: "4",
      icon: "M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7",
    },
    {
      // ariaLabel: "Recorrido por mis 30 añitos.",
      ariaLabel: "",
      // description: "En esta sección, tu mami no quiso desaprovechar la ocasión para contarte un poquito de tu historia.",
      description: "",
      Component: <Building/>,
      tab: "2",
      icon: "M6 21C7.5 19.4 9 17.9673 9 16.2C9 14.4327 7.65685 13 6 13C4.34315 13 3 14.4327 3 16.2C3 17.9673 4.5 19.4 6 21ZM6 21H17.5C18.8807 21 20 19.8807 20 18.5C20 17.1193 18.8807 16 17.5 16H15M18 11C19.5 9.4 21 7.96731 21 6.2C21 4.43269 19.6569 3 18 3C16.3431 3 15 4.43269 15 6.2C15 7.96731 16.5 9.4 18 11ZM18 11H14.5C13.1193 11 12 12.1193 12 13.5C12 14.8807 13.1193 16 14.5 16H15.6",
    },
    {
      // ariaLabel: "Juego de la memoria con Bodoque.",
      ariaLabel: "",
      // description: "En esta sección, vas a poder jugar al juego de la memoria junto a Bodoque. Espero que sus fotitos te ayuden a recordar.",
      description: "",
      Component: <Building/>,
      tab: "3",
      icon: "M12 14V17M12 14C9.58104 14 7.56329 12.2822 7.10002 10M12 14C14.419 14 16.4367 12.2822 16.9 10M17 5H19.75C19.9823 5 20.0985 5 20.1951 5.01921C20.5918 5.09812 20.9019 5.40822 20.9808 5.80491C21 5.90151 21 6.01767 21 6.25C21 6.94698 21 7.29547 20.9424 7.58527C20.7056 8.77534 19.7753 9.70564 18.5853 9.94236C18.2955 10 17.947 10 17.25 10H17H16.9M7 5H4.25C4.01767 5 3.90151 5 3.80491 5.01921C3.40822 5.09812 3.09812 5.40822 3.01921 5.80491C3 5.90151 3 6.01767 3 6.25C3 6.94698 3 7.29547 3.05764 7.58527C3.29436 8.77534 4.22466 9.70564 5.41473 9.94236C5.70453 10 6.05302 10 6.75 10H7H7.10002M12 17C12.93 17 13.395 17 13.7765 17.1022C14.8117 17.3796 15.6204 18.1883 15.8978 19.2235C16 19.605 16 20.07 16 21H8C8 20.07 8 19.605 8.10222 19.2235C8.37962 18.1883 9.18827 17.3796 10.2235 17.1022C10.605 17 11.07 17 12 17ZM7.10002 10C7.03443 9.67689 7 9.34247 7 9V4.57143C7 4.03831 7 3.77176 7.09903 3.56612C7.19732 3.36201 7.36201 3.19732 7.56612 3.09903C7.77176 3 8.03831 3 8.57143 3H15.4286C15.9617 3 16.2282 3 16.4339 3.09903C16.638 3.19732 16.8027 3.36201 16.901 3.56612C17 3.77176 17 4.03831 17 4.57143V9C17 9.34247 16.9656 9.67689 16.9 10",
    },
  ];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <section style={{ width: "90%", margin: "40px auto" }}>
      <div role="tablist" className="tabs tabs-lifted">
        {tabs.map((tab) => (
          <>
            <a
              style={{ height: 40 }}
              role="tab"
              className={`tab ${
                (searchParams && tab.tab === searchParams.get('tab')) && "tab-active"
              } [--tab-bg:77.4643% 0.062249 217.469017]`}
              onClick={() => replace(`${pathname}?tab=${tab.tab}`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={tab.icon}
                />
              </svg>
            </a>
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <article className="prose lg:prose-sm">
                <h1>{tab.ariaLabel}</h1>
                <p>{tab.description}</p>
              </article>
              {tab.Component}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
