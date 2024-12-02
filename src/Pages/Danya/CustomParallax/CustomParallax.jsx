import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import img1 from '../../../image/mountain-1.svg';
import img2 from '../../../image/mountain-2.svg';
import img3 from '../../../image/mountain-3.svg';
import sun1 from '../../../image/sun.svg';
import bottom from '../../../image/clouds-bottom.svg';
import left from '../../../image/clouds-left.svg';
import right from '../../../image/clouds-right.svg';
import starsImg from '../../../image/stars.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ParallaxOuter = styled.div`
  overflow: hidden;
`;

const ParallaxInner = styled.div`
  height: 110vh;
  width: 100%;
  position: relative;
  background: linear-gradient(
    #0f2b9c,
    #673d7d ${({ background }) => background}%,
    #a74a67,
    #edfc54
  );
`;

const Mountain3 = styled.img`
  width: 100%;
  bottom: 0;
  z-index: 3;
  position: absolute;
`;

const Mountain2 = styled.img`
  width: 100%;
  bottom: 20px;
  z-index: 2;
  position: absolute;
`;

const Mountain1 = styled.img`
  width: 100%;
  bottom: 40px;
  z-index: 1;
  position: absolute;
`;

const Sun = styled.img`
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  position: absolute;
`;

const CloudsBottom = styled.img`
  bottom: 0px;
  width: 100%;
  position: absolute;
`;

const CloudsLeft = styled.img`
  left: 0;
  width: 20%;
  position: absolute;
`;

const CloudsRight = styled.img`
  right: 0;
  width: 20%;
  position: absolute;
`;

const Stars = styled.img`
  top: -550px;
  left: 0;
  width: 100%;
  position: absolute;
`;

const Copy = styled.div`
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 10px;
`;

const CopyTitle = styled.h1`
  font-size: 10rem;
`;

const CopySpan = styled.span`
  background-color: #282a57;
  color: #e4e4e4;
  padding: 1rem;
  font-weight: 800;
  border-radius: 0.5rem;
`;

const CustomParallax = () => {
  const [background, setBackground] = useState(20);
  const [visible, setVisible] = useState(true);

  const parallaxRef = useRef(null);
  const mountain3Ref = useRef(null);
  const mountain2Ref = useRef(null);
  const mountain1Ref = useRef(null);
  const cloudsBottomRef = useRef(null);
  const cloudsLeftRef = useRef(null);
  const cloudsRightRef = useRef(null);
  const starsRef = useRef(null);
  const sunRef = useRef(null);
  const copyRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top top',
          end: '5000 bottom',
          scrub: true,
          pin: true,
          onUpdate: self => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain3Ref.current,
        {
          y: '-=80',
        },
        0
      );
      tl.to(
        mountain2Ref.current,
        {
          y: '-=30',
        },
        0
      );
      tl.to(
        mountain1Ref.current,
        {
          y: '+=50',
        },
        0
      );
      tl.to(
        starsRef.current,
        {
          top: 0,
        },
        0.5
      );
      tl.to(
        cloudsBottomRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0
      );
      tl.to(
        cloudsLeftRef.current,
        {
          x: '-20%',
          opacity: 0,
        },
        0
      );
      tl.to(
        cloudsRightRef.current,
        {
          x: '20%',
          opacity: 0,
        },
        0
      );
      tl.to(
        sunRef.current,
        {
          y: '+=210',
        },
        0
      );
      tl.to(
        copyRef.current,
        {
          y: '-250%',
          opacity: 1,
        },
        0
      );
      tl.to(
        btnRef.current,
        {
          opacity: 1,
        },
        1.5
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <ParallaxOuter ref={parallaxRef}>
      <ParallaxInner ref={mountain3Ref} background={background}>
        <Mountain3 ref={mountain3Ref} src={img3} alt="Mountain 3" />
        <Mountain2 ref={mountain2Ref} src={img2} alt="Mountain 2" />
        <Mountain1 ref={mountain1Ref} src={img1} alt="Mountain 1" />
        <Sun ref={sunRef} src={sun1} alt="Sun" />
        <CloudsBottom ref={cloudsBottomRef} src={bottom} alt="Clouds Bottom" />
        <CloudsLeft ref={cloudsLeftRef} src={left} alt="Clouds Left" />
        <CloudsRight ref={cloudsRightRef} src={right} alt="Clouds Right" />
        <Stars ref={starsRef} src={starsImg} alt="Stars" />
        <Copy ref={copyRef}>
          <CopyTitle>Journey</CopyTitle>
          <CopySpan ref={btnRef}>Discover more</CopySpan>
        </Copy>
      </ParallaxInner>
    </ParallaxOuter>
  );
};

export default CustomParallax;
