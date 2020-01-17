import React, { Component } from 'react';
import styled from 'styled-components';
import { faEye, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StatsDiv = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StatItem = styled.li`
  margin: 0 5px;
  padding: 5px 8px;
  border-radius: 3px;
  background: ${props => props.data.accent_color};
  font-size: 1.5em;
`;

class Stats extends Component {
  render() {
    return (
      <StatsDiv>
        <StatItem {...this.props}>
          <FontAwesomeIcon icon={faEye} style={{ marginRight: '5px' }} />
          {this.props.user.view_count && this.props.user.view_count.toLocaleString()}
        </StatItem>
        <StatItem {...this.props}>
          <FontAwesomeIcon icon={faUserFriends} style={{ marginRight: '5px' }} />
          {this.props.follows.total && this.props.follows.total.toLocaleString()}
        </StatItem>
      </StatsDiv>
    );
  }
}

export default Stats;
