import { Timeline } from "@/components/ui/timeline.js";
// import logo from "../../public/logo.png";
// import Image from "next/image";

export default function Experiences() {
  const timelineData = [
    {
      title: "Start of My Journey",
      content:
        "Over the years, I have honed my skills in HTML, CSS, JavaScript, and modern frontend frameworks like React and Next.js. My journey began with a keen interest in web design, which evolved into a deep understanding of frontend development practices.",
      image: ["/html.svg", "/reactjs.svg", "/nodejs.svg", "/express.svg"],
    },
    {
      title: "Projects and Growth",
      content:
        "I have worked on various projects, ranging from simple landing pages to complex web applications, always striving for excellence in both functionality and user experience.",
      // image: ["../../public/logo.png"],
    },
    {
      title: "Notable Projects",
      content:
        "Some of my notable projects include: ShopHub (e-commerce platform), PayMyFee (payment management system), QuizMaster (quiz app), and Atthem Financial Services (financial services website).",
      // image: ["../../public/logo.png"],
    },
  ];

  return (
    <section id="about" className="text-color body-font bg-extra py-16 ">
      <div className="container mx-auto flex flex-col px-5 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-button">Experiences</h2>
          <p className="text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            I am a passionate and experienced Frontend Developer with a strong
            focus on creating responsive, accessible, and user-centric websites
            and applications. With a diverse portfolio of frontend projects, I
            leverage modern web technologies and design principles to deliver
            high-quality digital experiences.
          </p>
          {/* <Image src={logo}/> */}
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* This section can be uncommented or modified as needed */}
          {/* <div className="lg:w-1/2 md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold text-color mb-4">My Journey</h3>
            <p className="text-lg leading-relaxed mb-4">
              My expertise extends to performance optimization, SEO best
              practices, and accessibility standards. I am dedicated to ensuring
              that every project I work on is not only visually appealing but
              also performs well across all devices and browsers.
            </p>
          </div> */}
        </div>
        <Timeline data={timelineData} />
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex text-extra bg-button border-0 py-2 px-6 focus:outline-none hover:bg-extra hover:text-button hover:border hover:border-button rounded text-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
