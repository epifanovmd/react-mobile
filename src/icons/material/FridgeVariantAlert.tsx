import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FridgeVariantAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 4V19C17 20.11 16.11 21 15 21V22H13V21H10.5V2H15C16.11 2 17 2.9 17 4ZM5 2H9.5V21H7V22H5V21C3.9 21 3 20.11 3 19V4C3 2.9 3.9 2 5 2ZM8 10H5V14H8V10ZM19 7V13H21V7H19ZM19 17H21V15H19V17Z" />
    </Svg>
  );
};
