import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BedKingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6 5C5.47 5 5 5.21 4.59 5.6C4.18 5.99 4 6.45 4 7V10C3.45 10 3 10.19 2.6 10.59C2.2 10.99 2 11.47 2 12V17H3.33L4 19H5L5.67 17H18.33L19 19H20L20.67 17H22V12C22 11.47 21.79 11 21.4 10.59C21 10.19 20.55 10 20 10V7C20 6.45 19.81 6 19.41 5.6C19.01 5.2 18.53 5 18 5H6ZM6 7H11V10H6V7ZM13 7H18V10H13V7Z" />
    </Svg>
  );
};
