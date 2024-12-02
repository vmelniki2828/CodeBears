import React from 'react';
import styled from 'styled-components';

const About = styled.div`
  color: #e4e4e4;
  padding-left: 10%;
  padding-bottom: 20%;
  padding-top: 50px;
  position: relative;
  bottom: 82px;
  background-color: #282a57;
`;

const Title = styled.h2`
  color: #e4e4e4;
  font-size: 5rem;
`;

const Paragraph = styled.p`
  margin-top: 20px;
  width: 50%;
`;

const Lorem = () => {
  return (
    <>
      <About>
        <Title>Lorem ipsum</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laborum
          ipsam corrupti asperiores magnam quos cumque animi tempore vero
          repellendus, harum odio neque quis, non temporibus. Inventore
          asperiores repudiandae praesentium ut, fugit quo esse, placeat ullam
          quibusdam perspiciatis delectus ducimus nihil. Dolorum nam veniam
          aperiam sapiente corporis! Quisquam, veritatis repellendus?
        </Paragraph>
      </About>
    </>
  );
};

export default Lorem;
