import Image from "next/legacy/image";
import {Divider} from "@nextui-org/react";


import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import obonye from "../../public/IMG_2345.PNG";
import NavMenu from "./components/footer"
import Experience from "./components/experience";
import Certifications from "./components/certifications";
import Skills from "./components/skills";
import Education from "./components/education";

export default function Home() {
  return (
    <main className="bg-blackgit px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between align-center">
          
          <h1 className="text-xl font-burtons">OG.</h1>
          <ul className="justify-around hidden md:flex">
            <li className="px-10"><a href="#skills">Skills</a></li>
            <li className="px-10"><a href="#experience">Experience</a></li>
            <li className="px-10"><a href="#education">Education</a></li>
            <li className="px-10"><a href="#certifications">Certifications</a></li>
          </ul>
          <ul className="flex">
          
            <li className="text-xl text-center">
              <a
                className="bg-gradient-to-r from-green-500 to-teal-700 px-4 py-2 rounded-md ml-8"
                href="#footer"
              >
                Contacts
              </a>
            </li>
          
          </ul>
        </nav>
        <div className=" text-center py-10 flex flex-col ">
          
          <h2 className="text-4xl text- pt-2 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">Obonye Galekhutle</h2>
          <h3 className="text-2xl py-2">Developer and Designer</h3>
          <p className="text-md py-5 leading-8 text-gray-600 text-center ">
            I am a final year BSc Computing with Finance Student at the
            University Of Botswana.With experience in Java,SQL and mobile
            development using flutter. I am looking to make a strong start to my career as a
            software engineer by making an active and impactful contribution to
            Botswana's tech industry.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
          <AiFillGithub/>
          <AiFillLinkedin/>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-green-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image alt="memoji of ob" src={obonye} layout="fill" objectFit="cover" />
        </div>
      </section>
      <Skills/>
      
      <Experience/>
      <Education/>
      <Certifications></Certifications>
      <NavMenu/>
    </main>
  );
}
