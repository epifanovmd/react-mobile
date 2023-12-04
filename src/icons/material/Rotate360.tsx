import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Rotate360Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 7C6.5 7 2 9.2 2 12C2 14.2 4.9 16.1 9 16.8V20L13 16L9 12V14.7C5.8 14.1 4 12.8 4 12C4 10.9 7 9 12 9C17 9 20 10.9 20 12C20 12.7 18.5 13.9 16 14.5V16.6C19.5 15.8 22 14.1 22 12C22 9.2 17.5 7 12 7Z" />
    </Svg>
  );
};
