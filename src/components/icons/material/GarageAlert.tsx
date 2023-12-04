import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const GarageAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 20H15V11H5V20H3V9L10 5L17 9V20ZM6 12H14V14H6V12ZM6 15H14V17H6V15ZM19 15V10H21V15H19ZM19 19V17H21V19H19Z" />
    </Svg>
  );
};
