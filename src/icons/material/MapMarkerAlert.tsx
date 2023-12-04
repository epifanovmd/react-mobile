import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 2C15.9 2 19 5.1 19 9C19 14.2 12 22 12 22C12 22 5 14.2 5 9C5 5.1 8.1 2 12 2ZM11 6V12H13V6H11ZM11 14V16H13V14H11Z" />
    </Svg>
  );
};
