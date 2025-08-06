import { Box } from "./box";
const info = [
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        ></path>
      </svg>
    ),
    services: "Custom Software Development",
    info: "Tailored solutions designed to meet your specific business needs, from web applications to...",
    color: "#455DFE",
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    services: "AI & Machine Learning",
    info: "Leverage the power of artificial intelligence to automate processes, gain...",
    color: "#BA45E6",
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        ></path>
      </svg>
    ),
    services: "Cloud Solutions",
    info: "Scalable, secure, and efficient cloud infrastructure designed to grow with yo...",
    color: "#00BB67",
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ></path>
      </svg>
    ),
    services: "Blockchain Development",
    info: "Secure, transparent, and decentralized solutions powered by blockchain...",
    color: "#FA3628",
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        ></path>
      </svg>
    ),
    services: "IoT Solutions",
    info: "Connect and control devices, collect data, and create intelligent systems for...",
    color: "#EDA300",
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        ></path>
      </svg>
    ),
    services: "Cybersecurity",
    info: "Protect your digital assets with comprehensive security solutions and...",
    color: "#3C5EFE",
  },
];
export function ServicesBoxes() {
  return (
    <div className="services-boxes">
      {info.map((value, index) => (
        <Box
          key={index}
          logo={value.logo}
          services={value.services}
          info={value.info}
          color={value.color}
        />
      ))}
    </div>
  );
}
