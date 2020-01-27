import React, { Component } from 'react';
import './App.css';
import { Container,List } from 'semantic-ui-react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <Container>
        <List>
          <List.Item>
            <List.Icon name='right angle' />
            <List.Content>
              <List.Header>Berklee College of Music</List.Header>
              <List.List>
                <List.Item>
                  <List.Icon name='book' /> Electronic Production & Design/Jazz Composition
              </List.Item>
                <List.Item>
                  <List.Icon name='time' /> 2008 - 2012
              </List.Item>
                
                
           
              </List.List>
            </List.Content>
          </List.Item>
</List>
        </Container>
        </div>
        );
    }
}
