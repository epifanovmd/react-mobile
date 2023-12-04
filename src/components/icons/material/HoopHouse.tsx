import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HoopHouseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 5C6.5 5 2 9.5 2 15V21H22V15C22 9.5 17.5 5 12 5ZM12 7C14.53 7 16.78 8.17 18.25 10H5.76C7.22 8.17 9.47 7 12 7ZM8 19H4V15C4 13.94 4.21 12.93 4.58 12H8V19ZM14 19H10V12H14V19ZM20 19H16V12H19.42C19.79 12.93 20 13.94 20 15V19Z" />
    </Svg>
  );
};
