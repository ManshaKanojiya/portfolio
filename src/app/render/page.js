import Experiences from "../experiences/page";
import Hero from "../hero/page";
import Resume from "../resume/page";
import Skills from "../skills/page";

export default function Render() {
    return (
        <main>
           <Hero id="/"/>
           <section id="experiences"> <Experiences className="w-full "/></section>
           <section id="resume"><Resume/></section>

            <section id="skills"><Skills className="w-full h-screen bg-background" /></section>
        </main>
    );
}