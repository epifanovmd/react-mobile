import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GamepadIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16.5 9L13.5 12L16.5 15H22V9H16.5ZM9 16.5V22H15V16.5L12 13.5L9 16.5ZM7.5 9H2V15H7.5L10.5 12L7.5 9ZM15 7.5V2H9V7.5L12 10.5L15 7.5Z" />
    </Svg>
  );
};
