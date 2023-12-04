import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MopedElectricIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 5C19 3.9 18.1 3 17 3H14V5H17V7.65L13.5 12H10V7H6C3.79 7 2 8.79 2 11V14H4C4 15.66 5.34 17 7 17C8.66 17 10 15.66 10 14H14.5L19 8.35V5ZM7 15C6.45 15 6 14.55 6 14H8C8 14.55 7.55 15 7 15ZM5 4H10V6H5V4ZM19 11C17.34 11 16 12.34 16 14C16 15.66 17.34 17 19 17C20.66 17 22 15.66 22 14C22 12.34 20.66 11 19 11ZM19 15C18.45 15 18 14.55 18 14C18 13.45 18.45 13 19 13C19.55 13 20 13.45 20 14C20 14.55 19.55 15 19 15ZM7 20H11V18L17 21H13V23L7 20Z" />
    </Svg>
  );
};
