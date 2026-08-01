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
  className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-105"
>
  Resume
</a>

      </nav>
    </header>
  );
};

export default Navbar;