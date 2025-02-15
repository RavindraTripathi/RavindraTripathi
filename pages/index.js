import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ravindra Kumar Tripathi - Portfolio</title>
        <meta name="description" content="Portfolio of Ravindra Kumar Tripathi, a Software Developer specializing in SAP ABAP, Data Analytics, and Web Development." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4">
        <Section id="home">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-10">
            <img src="/profile.jpg" alt="Ravindra Kumar Tripathi" className="w-32 h-32 rounded-full mx-auto" />
            <h1 className="text-4xl mt-4">Ravindra Kumar Tripathi</h1>
            <p className="text-xl mt-2">Software Developer specializing in SAP ABAP, Data Analytics, and Web Development</p>
            <a href="#" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">Download Resume</a>
          </motion.div>
        </Section>

        <Section id="about">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4">I am a passionate software developer with experience in SAP ABAP, Data Analysis, SQL, and Web Development...</p>
          <ul className="mt-4">
            <li>SAP ABAP</li>
            <li>SQL</li>
            <li>Power BI</li>
            <li>HTML/CSS</li>
            <li>Advanced Excel</li>
          </ul>
        </Section>

        <Section id="experience">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="mt-4">
            <h3>HCLTech (Dec 2024 – Present)</h3>
            <p>Training in ABAP Development</p>
            <h3>Retail Client (Mar 2024 – Nov 2024)</h3>
            <p>ABAP Developer in BI/BW module</p>
            <h3>Merkle Inc. (Sept 2023 – Dec 2023)</h3>
            <p>Associate Analyst, incident handling, system optimization</p>
            <h3>Ugam Solutions (Jan 2022 – Sept 2023)</h3>
            <p>Data Consultant, analytics support, inventory reconciliation</p>
          </div>
        </Section>

        <Section id="projects">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="mt-4">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
            <a href="https://github.com/your-github" className="text-blue-500">GitHub Link</a>
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
            <a href="https://github.com/your-github" className="text-blue-500">GitHub Link</a>
          </div>
        </Section>

        <Section id="skills">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <ul className="mt-4">
            <li>SAP ABAP</li>
            <li>SQL</li>
            <li>Power BI</li>
            <li>HTML/CSS</li>
            <li>Advanced Excel</li>
          </ul>
        </Section>

        <Section id="certifications">
          <h2 className="text-3xl font-bold">Certifications & Training</h2>
          <ul className="mt-4">
            <li>SAP ABAP Programming (SAP, 2025)</li>
            <li>SQL (HackerRank, 2024)</li>
            <li>SAP ABAP Programming (LinkedIn Learning, 2023)</li>
          </ul>
        </Section>

        <Section id="contact">
          <h2 className="text-3xl font-bold">Contact</h2>
          <form className="mt-4">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 mt-1 border rounded"/>
            <label htmlFor="email" className="mt-4">Email:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 mt-1 border rounded"/>
            <label htmlFor="message" className="mt-4">Message:</label>
            <textarea id="message" name="message" required className="w-full p-2 mt-1 border rounded"></textarea>
            <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Send</button>
          </form>
          <p className="mt-4">Email: tripathiravindra212@gmail.com</p>
          <div className="mt-4">
            <a href="https://linkedin.com/in/ravindra-tripathi" className="text-blue-500">LinkedIn</a>
            <a href="https://github.com/your-github" className="ml-4 text-blue-500">GitHub</a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
