import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full justify-center p-6">
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl">

        <Logo />

        <NavLinks />

<a
  href="/resume.pdf"
  download
  className="group relative overflow-hidden rounded-xl border border-cyan-400/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:text-black"
>
  <span className="absolute inset-0 -translate-x-full bg-cyan-400 transition-transform duration-300 group-hover:translate-x-0"></span>

  <span className="relative z-10">
    Resume ↓
  </span>
</a>

      </nav>
    </header>
  );
};

export default Navbar;