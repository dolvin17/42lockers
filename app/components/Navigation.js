import Link from "next/link";

const links = [
  {
    label: "First Floor",
    route: "/firstfloor",
  },
  {
    label: "Second Floor",
    route: "/secondfloor",
  },
];

export function Navigation() {
  return (
    <header>
      <nav>
        <ul className="flex flex-col items-center justify-center mx-auto">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
