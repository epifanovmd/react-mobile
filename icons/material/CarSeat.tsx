import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CarSeatIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 18C7 18 4 10 4 6C4 2 6 2 6 2H7C7 2 8 2 8 3C8 4 7 4 7 6C7 8 10 10 10 13C10 16 7 18 7 18ZM12 17C11 17 8 19.5 8 19.5C7.7 19.7 7.8 20 8 20.3C8 20.3 9 22.1 11 22.1H17C18.1 22.1 19 21.2 19 20.1V19.1C19 18 18.1 17.1 17 17.1H12V17Z" />
    </Svg>
  );
};
