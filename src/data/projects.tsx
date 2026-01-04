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
    id: "ecommerce-platform",
    category: "E-Commerce",
    title: "Modern E-Commerce Store",
    src: "/assets/projects-screenshots/codingducks/landing.png", // REPLACE with your image path
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://github.com/syed1818", // REPLACE with live URL if available
    github: "https://github.com/syed1818/ecommerce-project", // Update with actual repo name
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A full-stack shopping experience.
          </TypographyP>
          <TypographyP className="font-mono ">
            A robust e-commerce platform built with performance and scalability in mind. 
            Features include a custom shopping cart, secure checkout via Stripe, 
            and a comprehensive admin dashboard for inventory management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
             <li>Real-time inventory updates using WebSockets.</li>
             <li>Secure authentication and payment processing.</li>
             <li>Responsive design optimized for mobile conversions.</li>
          </ul>
          {/* Add more screenshots in public/assets/projects-screenshots/ folder and reference them here */}
        </div>
      );
    },
  },
  {
    id: "task-manager",
    category: "Productivity",
    title: "TaskMaster Pro",
    src: "/assets/projects-screenshots/ghostchat/1.png", // REPLACE with your image path
    screenshots: ["1.png"],
    live: "https://github.com/syed1818",
    github: "https://github.com/syed1818/task-manager",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
           <TypographyP className="font-mono text-2xl text-center">
            Organize your life, effortlessly.
          </TypographyP>
          <TypographyP className="font-mono ">
            A collaborative task management tool inspired by Trello and Asana. 
            Allows users to create boards, lists, and cards with drag-and-drop functionality.
            Perfect for teams looking to boost productivity.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Tech Deep Dive</TypographyH3>
          <p className="font-mono mb-2">
            Built using the MERN stack with React Query for efficient state management 
            and caching. Backend API designed with Express and secured with JWT.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio-v1",
    category: "Personal Brand",
    title: "Syed's Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png", // REPLACE with your image path
    screenshots: ["landing.png"],
    live: "https://github.com/syed1818",
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