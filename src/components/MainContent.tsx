import React from 'react';

interface PortfolioContentProps {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

const PortfolioContent: React.FC<PortfolioContentProps> = ({ title, description, imageUrl, date }) => {
    return (
        <div className='flex gap-x-3'>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{date}</p>
            </div>
            <img src={imageUrl} alt={title} />
        </div>
    );
};

const dummyPortfolioData: PortfolioContentProps[] = [
    {
        title: "Portfolio 4",
        description: "This is the fourth portfolio.",
        imageUrl: "https://via.placeholder.com/150",
        date: "2022-01-01"
    },
    {
        title: "Portfolio 5",
        description: "This is the fifth portfolio.",
        imageUrl: "https://via.placeholder.com/150",
        date: "2022-02-01"
    },
    {
        title: "Portfolio 6",
        description: "This is the sixth portfolio.",
        imageUrl: "https://via.placeholder.com/150",
        date: "2022-03-01"
    }
];

const MainContent: React.FC = () => {
    return (
        <div className='flex flex-col items-center mt-10 mb-10'>
            <h1 className='text-center text-5xl font-semibold mb-10'>My Portfolio</h1>
            <div className='flex flex-wrap gap-x-10'>
                {dummyPortfolioData.map((portfolio) => (
                    <PortfolioContent
                        key={portfolio.title}
                        title={portfolio.title}
                        description={portfolio.description}
                        imageUrl={portfolio.imageUrl}
                        date={portfolio.date}
                    />
                ))}
            </div>

        </div>
    );
}

export default MainContent;