import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WheelBarrowIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5C17.17 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5ZM18 14C16.34 14 15 15.34 15 17C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17C21 15.34 19.66 14 18 14ZM7 8L5 5H2V7H5.13L8 11.3V20H10L12.57 15H14.55C15.25 13.81 16.5 13 18 13C18.88 13 19.69 13.29 20.35 13.78L22 8H7ZM9.39 19H9V12.8L9.87 14.11C10.23 14.64 10.82 14.96 11.45 15L9.39 19Z" />
    </Svg>
  );
};
