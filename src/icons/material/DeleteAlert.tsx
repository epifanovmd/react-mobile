import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DeleteAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 4V6H3V4H6.5L7.5 3H12.5L13.5 4H17ZM4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19ZM19 15H21V17H19V15ZM19 7H21V13H19V7Z" />
    </Svg>
  );
};
