import { FocusCards } from "@/components/ui/focus-cards";
// import "../../public/"
export default function Skills() {
  const cards = [
    {
      src: "/html.svg",
      title: "HTML ", 
    },
    {
      src: "/css.svg",
      title: "CSS ", 
    },
    {
      src: "/js.svg",
      title: "JavaScript ", 
    },
    {
      src: "/reactjs.svg",    
      title: "React JS",
    },
    {
      src: "/tailwind.svg",
      title: "Tailwind CSS",
    },
    {
      src: "/nodejs.svg",
      title: "Node JS ", 
    },
    {
      src: "/express.svg",
      title: "Express JS ", 
    },
    {
      src: "/next.svg",
      title: "Next JS ", 
    },
    // Add more card objects as necessary
  ];

  return (
    <section id="skills" className="py-16 bg-extra text-color">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-semibold text-center mb-8">Skills</h2>
        <FocusCards cards={cards} /> {/* Pass the cards prop */}
      </div>
    </section>
  );
}
