import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HomeThermometerOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2L2 12H4V21H20V12H22L12 2ZM12 5L18 11V19H6V11L12 5ZM12 8C11.45 8 11 8.45 11 9V13.27C10.38 13.63 10 14.29 10 15C10 16.11 10.9 17 12 17C13.1 17 14 16.11 14 15C14 14.29 13.62 13.63 13 13.27V9C13 8.45 12.55 8 12 8Z" />
    </Svg>
  );
};
