import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DeleteRestoreIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 14H16L12 10L8 14H10V18H14V14ZM6 7H18V19C18 19.5 17.8 20 17.39 20.39C17 20.8 16.5 21 16 21H8C7.5 21 7 20.8 6.61 20.39C6.2 20 6 19.5 6 19V7ZM19 4V6H5V4H8.5L9.5 3H14.5L15.5 4H19Z" />
    </Svg>
  );
};
