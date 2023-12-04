import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleDriveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7.7099 3.5L1.1499 15L4.5799 21L11.1299 9.5L7.7099 3.5ZM9.7299 15L6.2999 21H19.4199L22.8499 15H9.7299ZM22.2799 14L15.4199 2H8.5799H8.5699L15.4299 14H22.2799Z" />
    </Svg>
  );
};
