import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PinOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M8 6.2V4H7V2H17V4H16V12L18 14V16H17.8L14 12.2V4H10V8.2L8 6.2ZM20 20.7L18.7 22L12.8 16.1V22H11.2V16H6V14L8 12V11.3L2 5.3L3.3 4L20 20.7ZM8.8 14H10.6L9.7 13.1L8.8 14Z" />
    </Svg>
  );
};
