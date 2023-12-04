import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DolbyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 5V19H22V5H2ZM6 17H4V7H6C8.86 7.09 11.1 9.33 11 12C11.1 14.67 8.86 16.91 6 17ZM20 17H18C15.14 16.91 12.9 14.67 13 12C12.9 9.33 15.14 7.09 18 7H20V17Z" />
    </Svg>
  );
};
