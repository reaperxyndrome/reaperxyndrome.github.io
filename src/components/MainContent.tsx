import React from 'react';
import URL1 from '../assets/portfolio-3.png';
import URL2 from '../assets/portfolio-4.png';
import URL3 from '../assets/portfolio-5.png';
import URL4 from '../assets/portfolio-6.png';
import URL5 from '../assets/portfolio-7.png';
import URL6 from '../assets/portfolio-8.png';
import { motion } from 'framer-motion';

interface PortfolioContentProps {
    title: string;
    description: React.ReactNode;
    imageUrl: string;
    link?: string;
    date: string;
    tags: string[]
}

const PortfolioContent: React.FC<PortfolioContentProps> = ({ title, description, imageUrl, link, date, tags }) => {
    return (
        <motion.div
            className='flex max-lg:flex-col gap-x-3 rounded-md p-5 
            text-white max-w-2xl justify-between
            shadow-xl shadow-slate-700 hover:scale-105 '
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            <div className='max-lg:order-2 max-lg:flex max-lg:flex-col max-lg:items-center'>
                <h2 className='mb-5 text-3xl font-bold max-lg:text-center'>{title}</h2>
                <div className=' max-w-96 h-40 overflow-auto'>{description}</div>
                <p className='mb-5 mt-5'>{date}</p>
                <div className='flex flex-wrap max-lg:justify-center gap-x-2 gap-y-3'>
                    {tags.map((tag) => (
                        <span key={tag} className='bg-gray-300 p-1 rounded-m text-black rounded-md'>{tag}</span>
                    ))}
                </div>
            </div>
            <div className='flex items-center max-lg:justify-center cursor-pointer max-lg:mb-10'>
                <a href={link}>
                    <img src={imageUrl} alt={title} className='rounded-2xl min-w-48 max-w-48 h-48 object-cover' />
                </a>
            </div>
        </motion.div>
    );
};

const dummyPortfolioData: PortfolioContentProps[] = [
    {
        title: "Frontend Mentor - MyTeam Multi-Page Website",
        description:
            <React.Fragment>
                My first full-scale website that I deployed. This is a website for an example service-based company that offers coaching services to build dynamic teams made up of global talent.
                <ul>
                    <li>- Part of Frontend Mentor Projects</li>
                    <li>- Built with Tailwind CSS</li>
                    <li>- Built with Next.js</li>
                    <li>- Fluid design using clamp() function in CSS</li>
                    <li>- Features a contact form with form validation</li>
                    <li>- Responsive design with burger menu for the navbar, opens up a dialog box and an overlay that darkens the content when tapped on small screens.</li>
                </ul>
            </React.Fragment>,
        imageUrl: URL5,
        link: "https://frontend-mentor-xi-roan.vercel.app/myteam-multi-page-website",
        date: "Nov 2023 - Dec 2023",
        tags: ['React', "Next.js", 'Tailwind CSS', 'TypeScript', 'Frontend Development']
    },
    {
        title: "Frontend Mentor - Single Page Design Portfolio",
        description:
            <React.Fragment>
                An example website to showcase designer portfolio to promote personal branding.
                <ul>
                    <li> - Part of Frontend Mentor projects </li>
                    <li> - Built with Tailwind CSS </li>
                    <li> - Built with Next.js </li>
                    <li> - Fluid design using clamp() function in CSS</li>
                    <li> - Skills section made using automatically aligning Grid in CSS</li>
                    <li> - Custom JavaScript image slider, features:</li>
                    <li className='ml-5'>1. Auto position images to center each time the browser is resized.</li>
                    <li className='ml-5'>2. Can be dragged both on screen or on mobile devices </li>
                    <li className='ml-5'>3. Has arrow buttons to swipe each image to the left or right.</li>
                </ul>
            </React.Fragment>,
        imageUrl: URL6,
        link: "https://frontend-mentor-xi-roan.vercel.app/single_page_design_portfolio",
        date: "Jul 2023 - Aug 2023",
        tags: ['TailwindCSS', 'Next.js', 'React.js']
    },
    {
        title: "Frontend Mentor - Stats Preview Card Component",
        description:
            <React.Fragment>
                A stats preview card component to preview statistics to promote a website to a particular audience.
                <ul>
                    <li> - Part of Frontend Mentor projects </li>
                    <li> - Built with Next.js </li>
                    <li> - Built with Tailwind CSS </li>
                </ul>
            </React.Fragment>,
        imageUrl: URL1,
        link: "https://stats-preview-card-component-omega.vercel.app/",
        date: "Jul 2023 - Jul 2023",
        tags: ['Frontend Mentor', 'Next.js', 'Tailwind CSS']
    },
    {
        title: "ReMask Web Design in Figma",
        description: "ReMask prototype design. It was part of Entrepreneurship Hatchery course. Although the app is not built yet, we successfully built a working user interface in figma. ReMask is intended to be an app for a company that sells products based on recycled masks.",
        imageUrl: URL2,
        link: "https://www.figma.com/file/Tpf9Y8wB2WFhGX8c34eCc5/ReMask---Prototype-Website",
        date: "Jan 2022 - Mar 2022",
        tags: ['Figma', 'Web Design']
    },
    {
        title: "Starbucks Homepage Replica in WebFlow",
        description: "This is the fifth portfolio. It was also created using React and TypeScript. It demonstrates the ability to create complex user interfaces with React. The project was completed on 2022-02-01.",
        imageUrl: URL3,
        link: "https://starbucks-home-page.webflow.io/",
        date: "Jul 2021 - Sep 2021",
        tags: ['Webflow', 'Frontend Development']
    },
    {
        title: "Personal Portfolio Website Design in Figma",
        description: "This is an initial figma design for my personal portfolio website.",
        imageUrl: URL4,
        link: "https://www.figma.com/file/dLbuBn4GSVn42QabN2tPAL/Portfolio-Website-Draft",
        date: "Mar 2021 - May 2021",
        tags: ["Figma", "Web Design"]
    }
];

const MainContent: React.FC = () => {
    return (
        <div className='flex flex-col items-center mt-20 mb-20' id='portfolio'>
            <h1 className='text-center text-5xl font-semibold mb-10'>My Portfolio</h1>
            <div className='flex flex-wrap gap-x-10 gap-y-10 items-center justify-center'>
                {dummyPortfolioData.map((portfolio) => (
                    <PortfolioContent
                        key={portfolio.title}
                        title={portfolio.title}
                        description={portfolio.description}
                        imageUrl={portfolio.imageUrl}
                        link={portfolio.link}
                        date={portfolio.date}
                        tags={portfolio.tags}
                    />
                ))}
            </div>

        </div>
    );
}

export default MainContent;