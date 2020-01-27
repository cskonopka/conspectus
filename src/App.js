import React from 'react';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Education from './Education.js'
import Publications from './Publications.js';
import Events from './Events.js';
import './App.css';

import { Tab, Container, Header } from 'semantic-ui-react'


const panes = [
  {
    menuItem: 'Experience',
    render: () => <Tab.Pane attached={false}>
      <Experience />
    </Tab.Pane>,
  },
  {
    menuItem: 'Skills',
    render: () => <Tab.Pane attached={false}>
      <Skills />
    </Tab.Pane>,
  },
  // {
  //   menuItem: 'Projects',
  //   render: () => <Tab.Pane attached={false}>
  //     <Projects />
  //   </Tab.Pane>,
  // },
  {
    menuItem: 'Pubs',
    render: () => <Tab.Pane attached={false}>
      <Publications />
    </Tab.Pane>,
  },
  {
    menuItem: 'Events',
    render: () => <Tab.Pane attached={false}>
      <Events />
    </Tab.Pane>,
  },
]

const panes2 = [
  {
    menuItem: 'Education',
    render: () => <Tab.Pane attached={false}>
      <Education />
    </Tab.Pane>,
  },

]


function App() {
  return (
    <div className="App">
      <Container fluid text textAlign='left'>
        <br />
        <Header textAlign="center" as='h1'>Christopher Konopka
          <Header.Subheader>
              Creative Technologist
              <br/>
              Boston, MA
              <br/>
              +19785011798
              <br/>
              cskonopka@protonmail.com
          </Header.Subheader>
        </Header>
        <br />
        <Tab menu={{ secondary: true, pointing: true }} panes={panes2} />
        <br />
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Container>
    </div>
  );
}

export default App;
