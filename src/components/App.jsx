import { Parallax } from "react-scroll-parallax";

export const App = () => {
  return (
    <div style={{display:"flex", gap:"50px"}}>
      <Parallax speed={-10}>
        <div
          style={{ width: '400px', backgroundColor: 'green', height: '500px' }}
        />
      </Parallax>
      <Parallax speed={10}>
        <div
          style={{ width: '400px', backgroundColor: 'green', height: '500px' }}
        />
      </Parallax>
      
    </div>
  );
};
