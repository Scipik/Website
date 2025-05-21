import { memo } from "react";

const CreateStars = (amount: number) => {
    let styles = `${Math.random() * screen.width}px ${Math.random() * screen.height}px rgba(255, 255, 255, 0.9)`;

    for (let i = 0; i < amount; i++) {
        styles += `, ${Math.random() * screen.width}px ${Math.random() * screen.height}px rgba(255, 255, 255, 0.9)`;
    }

    return styles;
};

const StarField = memo(({size, numberOfStars}: {size: number, numberOfStars: number}) => {
    const stars = CreateStars(numberOfStars);
    return <div className="aspect-square bg-transparent" style={{
        width: `${size}px`,
        boxShadow: stars,
    }} />;
})

const Stars = () => {
    return (<div className="absolute top-0 -z-10 w-screen h-screen bg-radial-[ellipse_at_bottom,_#1b2735_0%,_#090a0f_100%]">
        <StarField size={1} numberOfStars={700} />
        <StarField size={2} numberOfStars={500} />
        <StarField size={3} numberOfStars={300} />
    </div>);
};

export default Stars;