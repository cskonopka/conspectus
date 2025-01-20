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
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href="https://www.github.com/cskonopka">GitHub</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href="https://www.youtube.com/@cskonopka">YouTube</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <List.Header as='a' href="https://github.com/vondas-network">vondas.network</List.Header>
            </List.Content>
          </List.Item>
</List>
        </Container>
        </div>
        );
    }
}
