import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WrapIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 5H3V7H21V5ZM3 19H10V17H3V19ZM3 13H18C19 13 20 13.43 20 15C20 16.57 19 17 18 17H16V15L12 18L16 21V19H18C20.95 19 22 17.73 22 15C22 12.28 21 11 18 11H3V13Z" />
    </Svg>
  );
};
