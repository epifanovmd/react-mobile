import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ChefHatIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.5 1.5C10.73 1.5 9.17 2.67 8.67 4.37C8.14 4.13 7.58 4 7 4C5.93913 4 4.92172 4.42143 4.17157 5.17157C3.42143 5.92172 3 6.93913 3 8C3 9.82 4.24 11.41 6 11.87V19H19V11.87C20.76 11.41 22 9.82 22 8C22 6.93913 21.5786 5.92172 20.8284 5.17157C20.0783 4.42143 19.0609 4 18 4C17.42 4 16.86 4.13 16.33 4.37C15.83 2.67 14.27 1.5 12.5 1.5ZM12 10.5H13V17.5H12V10.5ZM9 12.5H10V17.5H9V12.5ZM15 12.5H16V17.5H15V12.5ZM6 20V21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H18C18.2652 22 18.5196 21.8946 18.7071 21.7071C18.8946 21.5196 19 21.2652 19 21V20H6Z" />
    </Svg>
  );
};
