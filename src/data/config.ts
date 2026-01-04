const config = {
  title: "Syed Shahid | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Syed Shahid, a Full Stack Developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work and let's build something amazing together!",
    short:
      "Discover the portfolio of Syed Shahid, a Full Stack Developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Syed Shahid",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Syed Shahid",
  email: "syedshahid.9380@gmail.com", // REPLACE with your actual email
  site: "https://syedshahid.online", // REPLACE with your actual site URL

  // for github stars button
  githubUsername: "syed1818", // REPLACE with your GitHub username
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/syedshahid", // REPLACE with your link
    linkedin: "https://www.linkedin.com/in/syedshahid18", // REPLACE with your link
    instagram: "https://www.instagram.com/_.syed__shahid._", // REPLACE with your link
    facebook: "https://www.facebook.com/syedshahid/", // REPLACE with your link
    github: "https://github.com/syed1818", // REPLACE with your link
  },
};
export { config };