import React from 'react';
import {
    BlockQuote, Cite, Deck, Heading, Image, List, ListItem, Quote, Slide, Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
);

const images = {
    formidagon: require('../../assets/images/formidagon.png'),
    goodWork: require('../../assets/images/formidagon.png')
};


export default class Presentation extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    dashboardRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    render() {
        console.log("render")
        if (this.state.redirect) {
            return <Redirect push to="/login/" />
        }
        return (
            <Deck
                theme={theme}
                transition={['zoom', 'slide']}
                transitionDuration={500}
            >
                <Slide transition={['zoom']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Training Video
            </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" fit bold>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </Text>
                </Slide>
                <Slide bgColor="secondary">
                    <Image src={images.formidagon} width={600} />
                </Slide>
                <Slide transition={['fade']} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>
                        Typography
            </Heading>
                    <Heading size={1} textColor="secondary">
                        Heading 1
            </Heading>
                    <Heading size={2} textColor="secondary">
                        Heading 2
            </Heading>
                    <Heading size={3} textColor="secondary">
                        Heading 3
            </Heading>
                    <Heading size={4} textColor="secondary">
                        Heading 4
            </Heading>
                    <Heading size={5} textColor="secondary">
                        Heading 5
            </Heading>
                    <Text textColor="secondary">
                        Standard text
            </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>
                        Standard List
            </Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
                <Slide>
                    <Image src={images.goodWork} width={500} />
                </Slide>
                <Slide>
                    <Button
                        type="button"
                        size="medium"
                        variant="contained"
                        color="primary"
                        onClick={() => this.dashboardRedirect()}>
                        Go To DashBoard
                    </Button>
                </Slide>
            </Deck>
        );
    }
}