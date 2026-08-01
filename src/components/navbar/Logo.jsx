const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <span className="text-xl font-bold text-white">
          M
        </span>
      </div>

      <div>
        <h2 className="font-['Space_Grotesk'] text-lg font-bold text-white">
          MADHESH
        </h2>

        <p className="text-xs text-slate-400">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Logo;