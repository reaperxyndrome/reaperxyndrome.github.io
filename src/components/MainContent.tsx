import React from 'react';

interface PortfolioContentProps {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    tags: string[]
}

const PortfolioContent: React.FC<PortfolioContentProps> = ({ title, description, imageUrl, date, tags }) => {
    return (
        <div className='flex gap-x-3 rounded-md p-5 text-white w-1/2 justify-between shadow-xl shadow-slate-700 hover:scale-105 cursor-pointer'>
            <div>
                <h2 className='mb-5 text-3xl font-bold'>{title}</h2>
                <p className=' w-96'>{description}</p>
                <p className='mb-5 mt-5'>{date}</p>
                <div className='flex flex-wrap gap-x-2'>
                    {tags.map((tag) => (
                        <span key={tag} className='bg-gray-300 p-1 rounded-m text-black rounded-md'>{tag}</span>
                    ))}
                </div>
            </div>
            <div className='flex items-center'>
                <img src={imageUrl} alt={title} className='rounded-2xl w-48 h-48' />
            </div>
        </div>
    );
};

const dummyPortfolioData: PortfolioContentProps[] = [
    {
        title: "Portfolio 4",
        description: "This is the fourth portfolio. It was created using React and TypeScript. It showcases the use of modern web development techniques.",
        imageUrl: "https://via.placeholder.com/150",
        date: "2022-01-01",
        tags: ['React', 'TypeScript']
    },
    {
        title: "Portfolio 5",
        description: "This is the fifth portfolio. It was also created using React and TypeScript. It demonstrates the ability to create complex user interfaces with React. The project was completed on 2022-02-01.",
        imageUrl: "https://via.placeholder.com/150",
        date: "2022-02-01",
        tags: ['React', 'TypeScript']
    },
    {
        title: "Portfolio 6",
        description: "This is the sixth portfolio. It was completed on 2022-03-01 and was created using React, TypeScript, and other technologies. It showcases the ability to create scalable and maintainable codebases. The project was a great learning experience and helped improve my skills in these technologies.",
        imageUrl: "https://via.placeholder.com/150",
        date: "2022-03-01",
        tags: ["React, TypeScript", "Hello", "Hey"]
    }
];

const MainContent: React.FC = () => {
    return (
        <div className='flex flex-col items-center mt-20 mb-20'>
            <h1 className='text-center text-5xl font-semibold mb-10'>My Portfolio</h1>
            <div className='flex flex-wrap gap-x-10 gap-y-10 items-center justify-center'>
                {dummyPortfolioData.map((portfolio) => (
                    <PortfolioContent
                        key={portfolio.title}
                        title={portfolio.title}
                        description={portfolio.description}
                        imageUrl={portfolio.imageUrl}
                        date={portfolio.date}
                        tags={portfolio.tags}
                    />
                ))}
            </div>

        </div>
    );
}

export default MainContent;