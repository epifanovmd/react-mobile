import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CamcorderIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 2C4.24 2 2 4.24 2 7V20C2 21.1 2.9 22 4 22H10C11.1 22 12 21.1 12 20V7C12 4.24 9.76 2 7 2ZM5 20C4.45 20 4 19.55 4 19C4 18.45 4.45 18 5 18C5.55 18 6 18.45 6 19C6 19.55 5.55 20 5 20ZM7 10C5.34 10 4 8.66 4 7C4 5.34 5.34 4 7 4C8.66 4 10 5.34 10 7C10 8.66 8.66 10 7 10ZM22 9V14C22 15.1 21.1 16 20 16H13V14H20V9H13V7H20C21.1 7 22 7.9 22 9Z" />
    </Svg>
  );
};
