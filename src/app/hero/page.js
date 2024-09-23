"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="text-button body-font h-full">
            <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 
           justify-around items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-button animate-heading">
                        Crafting Beautiful and Functional Digital Experiences
                        <br className="hidden lg:inline-block" />
                        Full Stack Developer
                    </h1>
                    <p className="mb-8 leading-relaxed text-color animate-paragraph">
                        Full Stack Developer with a Passion for Creating Responsive, Accessible, and User-Centric Websites and Applications.
                    </p>
                    <div className="flex justify-center md:justify-start gap-5">
                        <Link href="/projects" className="inline-flex text-extra bg-button border-0 py-2 px-6 focus:outline-none hover:bg-extra hover:text-button rounded text-lg">
                            View My Work
                        </Link>
                        <Link href="/contact" className="inline-flex text-extra bg-button border-0 py-2 px-6 focus:outline-none hover:bg-extra hover:text-button rounded text-lg">
                            Get in Touch
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto ">
                    <Image
                        className="object-cover object-center  rounded"
                        alt="hero"
                        src="/hero3.png"
                        width={300} // specify your desired width
                        height={300} // specify your desired height
                    />
                </div>
            </div>
        </section>
    );
}
