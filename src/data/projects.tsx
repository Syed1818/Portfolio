import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMysql, // Added for your E-Learning project
  SiPhp,   // Added for your E-Learning project
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "Prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "secure-vault",
    category: "Security",
    title: "Secure Vault",
    src: "/assets/projects-screenshots/codingducks/landing.png", // Use a placeholder image until you upload a real screenshot
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    live: "https://github.com/syed1818/secure-vault", // Link to repo as live demo isn't available
    github: "https://github.com/syed1818/secure-vault",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Robust Password Manager
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed a secure application to store and manage sensitive credentials using robust encryption algorithms.
            The app ensures your data remains private and protected against unauthorized access.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
             <li>**Encryption:** Implemented strong encryption algorithms to secure user data.</li>
             <li>**CRUD Operations:** Full capability to create, retrieve, update, and delete password entries.</li>
             <li>**Password Generator:** Integrated feature to generate strong, unique passwords automatically.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "lms-system",
    category: "Education",
    title: "E-Learning System",
    src: "/assets/projects-screenshots/ghostchat/1.png", // Use a placeholder image
    screenshots: ["1.png"],
    live: "https://github.com/syed1818",
    github: "https://github.com/syed1818",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind, // Assuming tailwind/bootstrap usage
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    get content() {
      return (
        <div>
           <TypographyP className="font-mono text-2xl text-center">
            Comprehensive Learning Management
          </TypographyP>
          <TypographyP className="font-mono ">
            A full-stack LMS designed to bridge the gap between teachers and students. 
            The system supports multiple user roles including Admin, Teacher, and Student.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">System Capabilities</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
             <li>**Role Management:** Distinct dashboards for Admins, Teachers, and Students.</li>
             <li>**Course Tools:** Features for content upload, assignment management, and tracking.</li>
             <li>**Payments:** Integrated payment gateway for course enrollments.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "portfolio-v1",
    category: "Personal Brand",
    title: "Syed's Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://syedshahid.online",
    github: "https://github.com/syed1818/portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.ts,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            My personal digital garden. A showcase of my skills, projects, and 
            experience as a Full Stack Developer.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Designed to be immersive and interactive, featuring 3D elements using Spline 
            and smooth page transitions with Framer Motion.
          </p>
        </div>
      );
    },
  },
];

export default projects;