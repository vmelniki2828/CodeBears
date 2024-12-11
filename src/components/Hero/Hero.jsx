import { LoremMainText } from "./Hero.styled";

const Hero = () => {
    return <div
        className="text-block"
        style={{
            opacity: 0,
            transform: 'translateY(100vh)',
            backgroundColor: 'rgba(128, 128, 128, 0.8)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            transition: 'opacity 0.1s ease, transform 0.1s ease',
        }}
    >
        <LoremMainText>Hello Lorem</LoremMainText>;
    </div>
};

export default Hero;
