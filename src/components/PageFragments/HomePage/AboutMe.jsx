import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi! I'm <b>Nick Chinsen</b> and welcome to my portfolio website. I'm a <b>full stack web developer</b> who loves
    tinkering with new technologies & stacks. I like to experiment with different web
    technologies so I have a good understanding of what is available to solve the problem at hand. I <b>3 years of web development experience</b> working with MERN stack, 
    MEAN stack and LAMP stack. Building <b>beautiful UI's, writing clean + functional code</b>, and keeping up-to-date on design + programming trends
    is what Nick loves to do. Check out my portfolio where I showcase <b><a href="/portfolio">some of my work with web technologies.</a></b>`,
  paraTwo: `Currently I work mostly with Javascript technologies like <b>ReactJS & NodeJS</b>. I also
    have hands on experience working with cloud infrastructures like <b>AWS/GCP</b> and have deployed applications
    keeping scalability in mind. <b>Travis, Jenkins</b>, Docker, SonarQube are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always learning every day, and becoming a better programmer.`,
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
        <h1 className="titleSeparate">About Me</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)}/>
          
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Currently living in"
            textH3="Toronto, ON, Canada"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happy"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Interpersonal Skills"
            textH3="Excellent"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Motorcycles"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Inquisitive Programmer"
            textH3="Always searching for ways to innovate"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="George Brown College"
            textH3="Advanced Diploma - Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
