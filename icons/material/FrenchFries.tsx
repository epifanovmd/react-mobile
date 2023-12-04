import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FrenchFriesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 11V6H15V4H12V2H8V5H6V11H5L7 22H17L19 11H18ZM15.86 11C15.7 11.61 15.4 12.16 15 12.62V8.62L17 9.62V11H15.86ZM17 7V8.5L15 7.5V7H17ZM12 5H14V8.5L12 9.5V5ZM12 10.62L14 9.62V13.45C13.41 13.8 12.73 14 12 14V10.62ZM11 13.86C10.21 13.65 9.5 13.22 9 12.62V9.62L11 8.62V13.86ZM9 3H11V7.5L10 8V5H9V3ZM7 6H9V8.5L8 9V11H7V6Z" />
    </Svg>
  );
};
