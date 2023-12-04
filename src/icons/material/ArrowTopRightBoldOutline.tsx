import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowTopRightBoldOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.63997 4.21997H19.78V18.36L15.54 14.12L9.87997 19.78L4.21997 14.12L9.87997 8.45997L5.63997 4.21997ZM17.66 6.33997H10.59L12.71 8.45997L7.04997 14.12L9.87997 16.95L15.54 11.29L17.66 13.41V6.33997Z" />
    </Svg>
  );
};
