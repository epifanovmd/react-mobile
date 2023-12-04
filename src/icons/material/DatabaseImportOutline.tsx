import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseImportOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M8.84 12L3.92 16.92L2.5 15.5L5 13H0V11H5L2.5 8.5L3.92 7.08L8.84 12ZM12 3C8.59 3 5.68 4.07 4.53 5.57L5 6L6.03 7.07C6 7.05 6 7 6 7C6 6.5 8.13 5 12 5C15.87 5 18 6.5 18 7C18 7.5 15.87 9 12 9C9.38 9 7.58 8.31 6.68 7.72L9.8 10.84C10.5 10.94 11.24 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45C16.7 13.4 14.42 14 12 14C11.04 14 10.1 13.9 9.24 13.73L7.59 15.37C8.91 15.77 10.41 16 12 16C14.28 16 16.39 15.55 18 14.77V17C18 17.5 15.87 19 12 19C8.13 19 6 17.5 6 17V16.96L5 18L4.54 18.43C5.69 19.93 8.6 21 12 21C16.41 21 20 19.21 20 17V7C20 4.79 16.42 3 12 3Z" />
    </Svg>
  );
};