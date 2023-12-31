import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import aboutMe from './assets/aboutMe.json';
import resumeData from './assets/resume.json';
import ContactForm from "./components/ContactForm";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }


  componentDidMount() {
    this.loadSharedData();
    this.loadResume()
  }

  loadResume() {
      this.setState({ resumeData: resumeData });
  }

  loadSharedData() {
      this.setState({ sharedData: aboutMe });
  }

  render() {
    document.title = this.state.sharedData.basic_info?.name + "'s Portfolio"
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <ContactForm />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
