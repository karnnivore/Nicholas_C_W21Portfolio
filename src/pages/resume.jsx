import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Button, Row, Col, Layout } from 'antd';
import SEO from '../components/Seo';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';


export default class Resume extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    const pageToggle = () => {
      if (pageNumber === 1) {
        this.setState({ pageNumber: 2 });
      } else {
        this.setState({ pageNumber: 1 });
      }
      return 1;
    };
    return (
      <Layout className="outerPadding">
      <Layout className="container">
        <SEO
          title="Resume"
          description="My resume consists of my biodata of experience. You can hire me if you feel
          I'm good for any position in your organization. I'm open to various challenges that come
          in the way of building various web applications."
          path="resume"
        />
        <Header/>
        <SidebarWrapper>
        <Document
          file="../Nick_Chinsen_Resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page 
            pageNumber={pageNumber}
            style={{
              backgroundColor: 'tomato',
              width: 50,
            }}
          />
        </Document>
        </SidebarWrapper>
      </Layout>
      </Layout>
    );
  }
}
