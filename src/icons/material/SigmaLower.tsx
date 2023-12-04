import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SigmaLowerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 12C19 16.42 15.64 20 11.5 20C7.36 20 4 16.42 4 12C4 7.58 7.36 4 11.5 4H20V6H16.46C18 7.47 19 9.61 19 12ZM11.5 6C8.46 6 6 8.69 6 12C6 15.31 8.46 18 11.5 18C14.54 18 17 15.31 17 12C17 8.69 14.54 6 11.5 6Z" />
    </Svg>
  );
};
