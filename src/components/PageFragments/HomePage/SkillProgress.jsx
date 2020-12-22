import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>Programming Languages</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={90}
          text="JavaScript"
        />
        <ProgressBar
          percent={90}
          text="HTML"
        />
        <ProgressBar
          percent={85}
          text="CSS"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={90}
          text="Java"
        />
        <ProgressBar
          percent={85}
          text="Python"
        />
        <ProgressBar
          percent={75}
          text="PHP"
        />
      </Col>
    </Row>
    <h2>Databases</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={80}
          text="MongoDB"
        />
        <ProgressBar
          percent={75}
          text="Java JPA"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={75}
          text="MySQL"
        />
        <ProgressBar
          percent={60}
          text="NoSQL"
        />
      </Col>
    </Row>
    <h2>Build & Frameworks </h2>
    <Row gutter={[20,20]}>
    <Col xs={24} sm={24} md={12}>
      <ProgressBar
        percent={90}
        text="React"
      />
      <ProgressBar
        percent={90}
        text="React-Native"
      />
      <ProgressBar
        percent={85}
        text="Node.JS"
      />
      <ProgressBar
        percent={85}
        text="Springboot"
      />
      </Col>
      <Col xs={24} sm={24} md={12}>
      <ProgressBar
        percent={90}
        text="BootStrap"
      />
      <ProgressBar
        percent={75}
        text="Thymeleaf"
      />
      <ProgressBar
        percent={75}
        text="Apache Maven"
      />
      <ProgressBar
        percent={70}
        text="Gradle"
      />
      </Col>
    </Row>
    
    <h2>Operating Systems</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={95}
          text="Windows"
        />
        <ProgressBar
          percent={85}
          text="Mac"
        />
        <ProgressBar
          percent={75}
          text="Linux"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={80}
          text="Android"
        />
        <ProgressBar
          percent={70}
          text="iOS"
        />
      </Col>
    </Row>
    
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
      <h2>CI/CD & VCS</h2>
        <ProgressBar
          percent={90}
          text="Git & GitHub"
        />
        <ProgressBar
          percent={65}
          text="Travis CI"
        />
        <ProgressBar
          percent={60}
          text="Jenkins"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
      <h2>Open-Source Web Dev Platforms</h2>
        <ProgressBar
          percent={90}
          text="WebFlow"
        />
        <ProgressBar
          percent={90}
          text="WordPress"
        />
    </Col>
    </Row>
  </div>
);

export default SkillsProgress;
