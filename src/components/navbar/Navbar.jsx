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
        className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black"
    >
        Resume
    </a>

    
</div>

      </nav>
    </header>
  );
};

export default Navbar;