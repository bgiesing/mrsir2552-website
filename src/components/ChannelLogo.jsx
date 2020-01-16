import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  margin: 1em;
  width: calc(3vw + 150px);
`;

const ChannelLogo = props => <Logo src="./mrsir-logo-white.png" alt="" />;

export default ChannelLogo;
