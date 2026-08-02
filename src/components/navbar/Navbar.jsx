import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full justify-center p-6">
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl">

        <Logo />

        <NavLinks />

<div className="flex items-center gap-4">
    {/* Resume Button */}
   <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative overflow-hidden rounded-full border border-cyan-400/40 px-6 py-3 font-semibold tracking-wide text-cyan-300 transition-all duration-500 hover:scale-105 hover:border-cyan-300"
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 transition-transform duration-500 group-hover:translate-x-0"></span>

  <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
    Resume
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  </span>
</a>

    
</div>

      </nav>
    </header>
  );
};

export default Navbar;