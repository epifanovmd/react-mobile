import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AlarmPanelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM8 19H5V17H8V19ZM8 16H5V14H8V16ZM8 13H5V11H8V13ZM13.5 19H10.5V17H13.5V19ZM13.5 16H10.5V14H13.5V16ZM13.5 13H10.5V11H13.5V13ZM19 19H16V17H19V19ZM19 16H16V14H19V16ZM19 13H16V11H19V13ZM19 9H5V5H19V9Z" />
    </Svg>
  );
};
