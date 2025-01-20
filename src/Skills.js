import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <List>
                    <List.Item>
                        <List.Icon name='server' />
                        <List.Content>
                            <List.Header>Backend</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='caret right' /> Node.js
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Python
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='cog' />
                        <List.Content>
                            <List.Header>AI</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='caret right' /> ChatGPT
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Generative AI
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> ComfyUI
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Visions of Chaos
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='cloud' />
                        <List.Content>
                            <List.Header>Cloud</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='caret right' /> AWS
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Docker
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='laptop' />
                        <List.Content>
                            <List.Header>Web3</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='caret right' /> Solidity
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Security auditing
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='laptop' />
                        <List.Content>
                            <List.Header>Frontend</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='caret right' /> Javascript
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> React
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='microchip' />
                        <List.Content>
                            <List.Header>Hardware</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='caret right' /> Arduino
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Raspberry Pi
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Cellular IoT
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Networking
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> IoT Automation
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='sync alternate' />
                        <List.Content>
                            <List.Header>Automation</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='caret right' /> Bash
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Python
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Selenium
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='sound' />
                        <List.Content>
                            <List.Header>Audio Frameworks</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='caret right' /> MaxMSP
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Pure Data
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Csound
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Web Audio API
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Icon name='object group outline' />
                        <List.Content>
                            <List.Header>Design</List.Header>
                            <List.List>
                                <List.Item>
                                    <List.Icon name='caret right' /> Adobe Photoshop
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Adobe Premiere
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='caret right' /> Adobe Illustrator
                                </List.Item>
                            </List.List>
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        );
    }
}