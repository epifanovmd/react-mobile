import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 2C15.86 2 19 5.14 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.14 8.14 2 12 2ZM10.47 14L17 7.41L15.6 6L10.47 11.18L8.4 9.09L7 10.5L10.47 14Z" />
    </Svg>
  );
};
