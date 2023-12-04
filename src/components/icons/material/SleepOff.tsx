import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SleepOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L12.73 16H9V14L9.79 13.06L2 5.27ZM23 12H17V10L20.39 6H17V4H23V6L19.62 10H23V12ZM9.82 8H15V10L13.54 11.72L9.82 8ZM7 20H1V18L4.39 14H1V12H7V14L3.62 18H7V20Z" />
    </Svg>
  );
};
