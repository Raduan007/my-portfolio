const techs = [
  { name: "JavaScript", img: "js.png" },
  { name: "React", img: "react.png" },
  { name: "Next.js", img: "next.png" },
  { name: "Node.js", img: "node.png" },
  { name: "Express", img: "express.png" },
  { name: "MongoDB", img: "mongodb.png" },
  { name: "PostgreSQL", img: "sql.png" },
  { name: "Prisma", img: "prisma.png" },
  { name: "Tailwind CSS", img: "tailwind.png" },
  { name: "Github", img: "github.png" },
  { name: "Git", img: "git.png" },

];

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="relative py-24 overflow-hidden bg-[#020617] text-white"
    >
      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-700/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            Technologies
          </h2>
          <p className="text-gray-400 mt-4">My Tech Stack</p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
          {techs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div
                className="
                  w-16 h-16
                  rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex items-center justify-center
                  shadow-[0_0_25px_rgba(255,255,255,0.05)]
                  transition-all duration-300
                  hover:scale-110
                  hover:border-cyan-400/40
                "
              >
                <img
                  src={`/assets/${tech.img}`}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <p className="mt-4 text-sm text-gray-300 font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;