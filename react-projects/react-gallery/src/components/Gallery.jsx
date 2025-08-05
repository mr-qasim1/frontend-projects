import { Card } from "./card";
const profiles = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBtZW58ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBtZW58ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1589458223095-03eee50f0054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1678917318811-0b0e6fd6ca28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
];
const users = [
  {
    name: "MARK JANSON",
    title: "CEO-FOUNDER",
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "QASIM",
    title: "SOFTWARE-ENGINEER",
    url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBtZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "IBRAHIM",
    title: "VEDIO-EDITOR",
    url: "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBtZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "HASHIM",
    title: "SNOOKER-PLAYER",
    url: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
  },
  {
    name: "HAMZA-SHAHG",
    title: "SR-SOFTWARE-ENGINEER",
    url: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
  },
  {
    name: "HUZZAIM",
    title: "CHEF",
    url: "https://images.unsplash.com/photo-1589458223095-03eee50f0054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
  },
  {
    name: "WAAIZ",
    title: "TIK-TOKER",
    url: "https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
  },
  {
    name: "RAHIM",
    title: "PROFESSIONAL-DRIVER",
    url: "https://plus.unsplash.com/premium_photo-1678917318811-0b0e6fd6ca28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
  },
];
export function Gallery() {
  return (
    <div className="gallery">
      {users.map((value, index) => (
        <Card
          key={index}
          url={value.url}
          name={value.name}
          title={value.title}
        />
      ))}
    </div>
  );
}
