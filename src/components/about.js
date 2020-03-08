import React from 'react';
import profile1 from '../img/t1.jpg';
import profile2 from '../img/t2.jpg';
import profile3 from '../img/t3.jpg';
import git from '../img/git.png'
import tweet from '../img/tweet.png'
import link from '../img/link.png'
import { Card, Container, Row, Col } from 'react-bootstrap';
import './about.css'

function About() {
  const team = [
    {
      name: 'Luis Diaz',
      description: `Lover for technology. Programing passionate. Self-learner and team player.`,
      picture: profile1,
      gitHub: 'https://github.com/luiseduardiazc',
      twitter: 'https://twitter.com/Luiseduardiazc',
      linkedIn: 'https://www.linkedin.com/in/luiseduardodiazcardenas/'
    },
    {
      name: 'Jaime Velez',
      description: 'Frontend developer, experience working in Javascript projects using React and Angular',
      picture: profile2,
      gitHub: 'https://github.com/jhudaz',
      twitter: 'https://twitter.com/jaimeandresvel7',
      linkedIn: 'https://www.linkedin.com/in/jaime-andres-velez-rojas/'
    },
    {
      name: 'Darwin Soto',
      description: 'Mechatronics engineer, programming passionate, and student Holberton School.',
      picture: profile3,
      gitHub: 'https://github.com/Daransoto',
      twitter: 'https://twitter.com/darutos',
      linkedIn: 'https://www.linkedin.com/in/darwin-soto/'
    }
  ]
  return (
    <Container className="about" fluid>
      <Row id="title">
        <h3>Team</h3>
      </Row>
      <Row>
        {
          team.map(user => {
            return (
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <img class="profiles" src={user.picture} alt="Profile pic"/>
                    <Card.Text>{user.description}</Card.Text>
                    <a href={user.gitHub} target="new_blank"><img src={git} alt="Github"/></a>
                    <a href={user.twitter} target="new_blank"><img src={tweet} alt="Twitter"/></a>
                    <a href={user.linkedIn} target="new_blank"><img src={link} alt="LinkedIn"/></a>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  );
}

export default About;
