import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi! I'm <b>Nick Chinsen</b> and this is my website. I'm a <b>full stack developer</b> who loves to code and dive deep into 
    frameworks & technologies. I'm comfortable with a variety of web technologies like <b>JavaScript, HTML, CSS, Angular, React, Node.JS, .NET Core, Spring, SQL, Mongo, and Web APIs</b>`,
  paraTwo: `I'm currently working as a Full Stack Developer CO-OP student with Axcys Finishing, in addition to working part-time
    at BMO, and finishing my last semester of school. I love coding, and I'm always looking for new projects so don't be afraid to
    reach out :)`,
  paraThree: `I strive to create the best code I can, always ensuring that I'm using the best tools for the job. I'm always learning
    and finding new innovative ways to complete projects. My career goal is to become an amazing Full Stack Engineer being able to 
    code effective solutions which solve business problems.`
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Nick', '', 'Chinsen', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">Bio</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} style={{fontSize: 20}}/>
          
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} style={{fontSize: 20}}/>

        <h1 className="titleSeparate">Philosophy</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} style={{fontSize: 20}}/>

        <h1 className="titleSeparate">Academic Credentials</h1>
        <p style={{fontSize: 20}}>
          <strong>Deans List: </strong> Spring 2019 & Winter 2020<br/>
          <strong>Advanced Diploma: </strong> Expected April 2021
        </p>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Currently living in"
            textH3="Toronto - Canada"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="I love coffee"
            textH3="And make a mean pour over"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="I'm a banker & developer"
            textH3="Improving daily"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="I love my hobbies"
            textH3="Motorcycles are one of them"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="I'm an inquisitive programmer"
            textH3="Who never stops learning"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="George Brown College"
            textH3="Final year - Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
