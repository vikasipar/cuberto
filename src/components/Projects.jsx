import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const leftColumnProjects = [
    {
      title: "Punto Pago",
      url: "https://cdn.cuberto.com/cb/projects/puntopago/cover.mp4",
    },
    {
      title: "Riyadh",
      url: "https://cdn.cuberto.com/cb/projects/riyadh/cover.mp4",
    },
    {
      title: "Qvino",
      url: "https://cdn.cuberto.com/cb/projects/qvino/cover.mp4",
    },
    {
      title: "Zelt",
      url: "https://cdn.cuberto.com/cb/projects/zelt/cover.mp4",
    },
    {
      title: "Cisco",
      url: "https://cdn.cuberto.com/cb/projects/cisco/cover.mp4",
    }
  ];

  const rightColumnProjects = [
    {
      title: "Kelvin Zero",
      url: "https://cdn.cuberto.com/cb/projects/kzero/cover.mp4?2",
    },
    {
      title: "Magma",
      url: "https://cdn.cuberto.com/cb/projects/magma/cover.mp4",
    },
    {
      title: "Flipaclip",
      url: "https://cdn.cuberto.com/cb/projects/flipaclip/cover.mp4",
    },
    {
      title: "Potion",
      url: "https://cdn.cuberto.com/cb/projects/potion/cover.mp4",
    },
    {
      title: "Ferrumpipe",
      url: "https://cdn.cuberto.com/cb/projects/ferrumpipe/cover.mp4",
    }
  ];

  return (
    <div className="bg-stone-950 text-white h-fit pt-2 pb-32 px-32 rounded-t-[4rem]">
      <div className="text-9xl py-36 font-light">
        <div>Featured</div>
        <div className="flex items-end">
          <div className="h-28 w-40 rounded-full overflow-hidden">
            <video
              src="https://cdn.cuberto.com/cb/home/featured/header.mp4?2"
              className=""
              //   loop
              //   autoPlay
              //   muted
            ></video>
          </div>
          <div>
            <span
              id="design"
              className="font-normal tracking-wide text-[8.5rem]"
            >
              &nbsp;projects
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-x-14">
        <div className="w-[36%]">
            {leftColumnProjects.map((project) => (
                <ProjectCard key={project.title} title={project.title} url={project.url} />
            ))}
        </div>
        <div className="w-[36%] mt-52">
            {rightColumnProjects.map((project) => (
                <ProjectCard key={project.title} title={project.title} url={project.url} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
