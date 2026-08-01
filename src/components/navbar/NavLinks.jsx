const links = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const NavLinks = () => {
  return (
    <ul className="hidden items-center gap-10 md:flex">
      {links.map((item) => (
        <li key={item.name}>
          <a
            href={item.link}
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;