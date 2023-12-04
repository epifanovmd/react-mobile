import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PlanetIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M6.89761 18.1618C8.28247 19.3099 10.0607 20 12.0001 20C16.4184 20 20.0001 16.4183 20.0001 12C20.0001 11.431 19.9407 10.8758 19.8278 10.3404M6.89761 18.1618C5.12756 16.6944 4.00014 14.4789 4.00014 12C4.00014 7.58172 7.58186 4 12.0001 4C15.8494 4 19.0637 6.71853 19.8278 10.3404M6.89761 18.1618C8.85314 17.7147 11.1796 16.7828 13.526 15.4281C16.2564 13.8517 18.4773 12.0125 19.8278 10.3404M6.89761 18.1618C4.46844 18.7171 2.61159 18.5243 1.99965 17.4644C1.36934 16.3726 2.19631 14.5969 3.99999 12.709M19.8278 10.3404C21.0796 8.79041 21.5836 7.38405 21.0522 6.46374C20.5134 5.53051 19.0095 5.26939 16.9997 5.59929"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
