import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BeerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 2H19L17 22H6L4 2ZM6.2 4L7.8 20H8.8L7.43 6.34C8.5 6 9.89 5.89 11 7C12.56 8.56 15.33 7.69 16.5 7.23L16.8 4H6.2Z" />
    </Svg>
  );
};
