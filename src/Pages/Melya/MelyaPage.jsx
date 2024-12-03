import { useGSAP } from '@gsap/react';
import {
  CardConatiner,
  MainComponent,
  MainTitle,
  SubTitle,
} from './MelyaPage.styled';
import card from './card.png';
import card2 from './card2.png';
import card3 from './card3.png';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const MelyaPage = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to('.card', { rotateY: 30, rotationX : 60, rotationZ: -10, x: 100});
      gsap.to('.card2', { rotateY: 30, rotationX : 60, rotationZ: -10});
      gsap.to('.card3', { rotateY: 30, rotationX : 60, rotationZ: -10, x: -100});
    },
    { scope: container }
  ); 

  useLayoutEffect(()=>{
    gsap.from(".card", {
      x:500,
      scrollTrigger:{
        trigger:".card",
      }
    })
  },[])

  return (
    <MainComponent>
      <MainTitle>3D Animating</MainTitle>
      <SubTitle>Credit Card</SubTitle>
      <CardConatiner ref={container} className="app">
        <img className="card" src={card} />
        <img className="card2" src={card2} />
        <img className="card3"  src={card3} />
      </CardConatiner>
    </MainComponent>
  );
};

export default MelyaPage;
