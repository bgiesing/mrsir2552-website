import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from './responsive';
import Status from './Status';

const Branding = styled.div`
  position: relative;
  margin-bottom: 20px;
  margin-right: 2em;
  font-size: calc(2vw + 1vh);
  ${media.md`font-size: 1em;`};
  ${media.lg`font-size: 1.25em`};
  ${media.xl`font-size: 1.5em`};
`;

const LogoImg = styled.img`
  height: 1.5em;
  margin-top: 0.9em;
  margin-left: 1em;
`;

class Brand extends Component {
  render() {
    return (
      <Branding {...this.props} className="brand">
        {this.props.data.custom_name ? (
          <h1>{this.props.data.custom_name}</h1>
        ) : (
          <LogoImg src='./mrsir-icon.png' alt='MrSir2552' aria-label='MrSir2552' loading='lazy'></LogoImg>
        )}
        {this.props.stream[0] ? <Status {...this.props} /> : <span />}
      </Branding>
    );
  }
}

export default Brand;
