import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TapeMeasureIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9 5C10.8565 5 12.637 5.7375 13.9497 7.05025C15.2625 8.36301 16 10.1435 16 12H17V15H16V19H9C7.14348 19 5.36301 18.2625 4.05025 16.9497C2.7375 15.637 2 13.8565 2 12C2 10.1435 2.7375 8.36301 4.05025 7.05025C5.36301 5.7375 7.14348 5 9 5ZM9 8C7.93913 8 6.92172 8.42143 6.17157 9.17157C5.42143 9.92172 5 10.9391 5 12C5 13.0609 5.42143 14.0783 6.17157 14.8284C6.92172 15.5786 7.93913 16 9 16C10.0609 16 11.0783 15.5786 11.8284 14.8284C12.5786 14.0783 13 13.0609 13 12C13 10.9391 12.5786 9.92172 11.8284 9.17157C11.0783 8.42143 10.0609 8 9 8ZM17 17H22V19V21H20V19H17V17Z" />
    </Svg>
  );
};
