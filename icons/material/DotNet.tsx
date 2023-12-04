import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DotNetIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 15C2.26522 15 2.51957 15.1054 2.70711 15.2929C2.89464 15.4804 3 15.7348 3 16C3 16.2652 2.89464 16.5196 2.70711 16.7071C2.51957 16.8946 2.26522 17 2 17C1.73478 17 1.48043 16.8946 1.29289 16.7071C1.10536 16.5196 1 16.2652 1 16C1 15.7348 1.10536 15.4804 1.29289 15.2929C1.48043 15.1054 1.73478 15 2 15ZM21 17H19V9H17V7H23V9H21V17ZM16 7V9H14V11H16V13H14V15H16V17H12V7H16ZM11 7V17H9L6 11V17H4V7H6L9 13V7H11Z" />
    </Svg>
  );
};
