import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import App from '../../components/App'
import Brother from '../../components/Brother'

var allBrothers = {
  "Santiago Noguera": "",
  "Paul Hazan": "",
  "Jesse Bengel": "",
  "Sebastian Lecha": "Senior Chair",
  "Hugo Caldwell": "External Philathropy Chair",
  "Michael Cassano": "",
  "Zachary Goldman": "",
  "Brian Tran-Dac": "Greek Week Chair",
  "Ryan Connors": "",
  "Anthony Starego": "",
  "Peter Danis": "Public Relations Chair",
  "Elias Yishak": "",
  "Jared McKee": "Public Relations Chair",
  "Kurt Barsotti": "TerpThon Chair",
  "Mark Bedanov-Pack": "Scholarship Chair",
  "Zachary Lessner": "",
  "Perry Ganz": "Sentinel",
  "Max Cislo": "Athletics Chair",
  "Joseph Hathway": "Brotherhood Chair",
  "Michael Kelleher": "President",
  "Connor Bell": "Away Weekend Chair",
  "Zachary Yale": "House Manager",
  "Tyler Weiss": "Treasurer",
  "Gunnar Terjesen": "Away Weekend Chair",
  "Alex Littlehales": "",
  "Harry Culleton": "Social Chair",
  "Colin Wagner": "",
  "Samuel Lupo": "",
  "Matt Labib": "",
  "Joshua Schnitzer": "Vice President",
  "Brian McKeon": "Rush Chair",
  "Nicholas Garibaldi": "Inductor",
  "Ryan Boyd": "Rush Chair",
  "Joseph Cipolla": "",
  "Brandon Segal": "",
  "Brandon Kao": "Secretary",
  "Benjamin Eapen": "Social Chair",
  "Shawn Glabach": "",
  "Michael Berhane": "Diversity Chair",
  "Harrison Kraus": "\"Lit\" Chair",
  "Jordan Riese": "",
  "Robert Lewis": "Fundraising Chair",
  "Jacob Chavis": "Website Chair",
  "James Corley": "Rush Chair",
  "Liam Fulling": "",
  "Benjamin Fleury V": "",
  "David Klotz": "",
  "Justin Frankle": ""
};

const brothers = Object.keys(allBrothers).map(function(name, id) {
  return (
    <Col md="4" key={id}>
      <Brother chair={allBrothers[name]} _name={name} />
    </Col>
  );
});

export default class BrothersPage extends React.Component {
  render() {
    return (
      <App>
        <Container>
          <h1 className="pageTitle" data-aos="fade-down"> Brothers </h1>
          <Row className="text-center">
            {brothers}
          </Row>
        </Container>
      </App>
    );
  }
}
