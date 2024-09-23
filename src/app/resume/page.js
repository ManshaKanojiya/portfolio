import Image from "next/image";

export default function Resume() {
    return (
        <section className="text-extra body-font">
            <div className="container px-5 py-24 mx-auto">
                {/* Skills Section */}
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <Image src="/skills.png" alt="skills" width={50} height={50}/>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-extra text-2xl title-font font-medium mb-2">Skills</h2>
                        <ul className="list-disc list-inside flex flex-wrap justify-between">
                            <li className="w-1/2 sm:w-1/3 mb-2">HTML, CSS, JavaScript</li>
                            <li className="w-1/2 sm:w-1/3 mb-2">React, Next.js</li>
                            <li className="w-1/2 sm:w-1/3 mb-2">Node.js, Express</li>
                            <li className="w-1/2 sm:w-1/3 mb-2">Tailwind CSS</li>
                            <li className="w-1/2 sm:w-1/3 mb-2">Responsive Design</li>
                            <li className="w-1/2 sm:w-1/3 mb-2">Version Control (Git)</li>
                        </ul>
                    </div>
                </div>

                {/* Education Section */}
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-extra text-2xl title-font font-medium mb-2">Education</h2>
                        <p className="leading-relaxed text-base">Bachelor of Science in Computer Science</p>
                        <p className="leading-relaxed text-base">Mumbai University, Graduated in 2024</p>
                    </div>
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <Image src="/education.png" alt="Education" width={50} height={50}/>

                    </div>
                </div>

                {/* Work Experience Section */}
                <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <Image src="/work.png" alt="work experience" width={50} height={50}/>

                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-extra text-2xl title-font font-medium mb-2">Work Experience</h2>
                        <p className="leading-relaxed text-base"></p>
                    </div>
                </div>

                {/* Download Resume Button */}
                <div className="text-center mt-12">
                    <a
                        href="/resume.pdf" // Update with your resume file path
                        className="inline-flex text-background bg-button border-0 py-2 px-6 focus:outline-none hover:bg-background hover:text-button hover:border-2 hover:border-button rounded text-lg"
                        download
                    >
                        Download My Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
