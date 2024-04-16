import { FC } from "react";

const Tab2: FC<{}> = () => {
  const dots = [
    {
      position: "start",
      text: "end",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo: "",
    },
    {
      position: "end",
      text: "start",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      position: "start",
      text: "end",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo: "",
    },
    {
      position: "end",
      text: "start",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      position: "start",
      text: "end",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo: "",
    },
    {
      position: "start",
      text: "end",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo: "",
    },
    {
      position: "end",
      text: "start",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      position: "start",
      text: "end",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo: "",
    },
    {
      position: "end",
      text: "start",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      position: "start",
      text: "end",
      year: 1994,
      title: "Nacimiento",
      description: `The Apple Macintosh—later rebranded as the Macintosh 128K—is the
            original Apple Macintosh personal computer. It played a pivotal role
            in establishing desktop publishing as a general office function. The
            motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
            housed in a beige case with integrated carrying handle; it came with
            a keyboard and single-button mouse.`,
      photo: "",
    },
  ];
  return (
    <ul className="mt-8 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {dots.map((dot) => (
        <li>
          <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#88c0d0" width="24px" height="24px" viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 22.2577 17.5469 C 24.8124 17.5469 26.8046 19 27.9999 21.1797 C 29.1718 19 31.2109 17.5469 33.7187 17.5469 C 37.7733 17.5469 40.6796 20.5937 40.6796 24.8125 C 40.6796 31.0937 34.0468 36.8594 29.1718 39.9766 C 28.7968 40.2109 28.3514 40.5391 28.0468 40.5391 C 27.7421 40.5391 27.2265 40.2109 26.8280 39.9766 C 21.9530 36.8594 15.2968 31.0937 15.2968 24.8125 C 15.2968 20.5937 18.2265 17.5469 22.2577 17.5469 Z" /></svg>
          </div>
          <div style={{ paddingBottom: 20, boxSizing: "border-box" }} className={`timeline-${dot.position} ${dot.position === "start" ? "md:text-end mr-2" : "md:ml-2"}`}>
            <time style={{ fontSize: 16, color: "#88c0d0" }} className="font-mono">{dot.year}</time>
            <div className="text-lg font-black">{dot.title}</div>
            <p className="text-sm mt-2">{dot.description}</p>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default Tab2;