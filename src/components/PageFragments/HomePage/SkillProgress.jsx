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
          percent={70}
          text="PHP"
        />
      </Col>
    </Row>
    <h2>Databases</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={85}
          text="MySQL"
        />
        <ProgressBar
          percent={75}
          text="MongoDB"
        />
        
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Java JPA"
        />
        <ProgressBar
          percent={60}
          text="NoSQL"
        />
      </Col>
    </Row>
    <h2>Library & Frameworks </h2>
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
        percent={70}
        text="Node.JS"
      />
      <ProgressBar
        percent={50}
        text="Gatsby"
      />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
