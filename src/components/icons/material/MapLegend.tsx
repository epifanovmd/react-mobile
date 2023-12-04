import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MapLegendIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.6326 3.05268 20.7598 3.14645 20.8536C3.24021 20.9473 3.36739 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.36739 20.9473 3.24021 20.8536 3.14645C20.7598 3.05268 20.6326 3 20.5 3L20.34 3.03L15 5.1L9 3ZM8 5.45V17.15L5 18.31V6.46L8 5.45ZM10 5.47L14 6.87V18.53L10 17.13V5.47ZM19 5.7V17.54L16 18.55V6.86L19 5.7ZM7.46 6.3L5.57 6.97V9.12L7.46 8.45V6.3ZM7.46 9.05L5.57 9.72V11.87L7.46 11.2V9.05ZM7.46 11.8L5.57 12.47V14.62L7.46 13.95V11.8ZM7.46 14.55L5.57 15.22V17.37L7.46 16.7V14.55Z" />
    </Svg>
  );
};
