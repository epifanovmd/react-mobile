import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BeakerRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.46 15.88L16.88 14.46L19 16.59L21.12 14.47L22.53 15.88L20.41 18L22.54 20.12L21.12 21.54L19 19.41L16.88 21.53L15.47 20.12L17.59 18L15.46 15.88ZM3 3H21V5C19.9 5 19 5.9 19 7V12C15.69 12 13 14.69 13 18C13 19.09 13.29 20.12 13.8 21H7C5.9 21 5 20.1 5 19V7C5 5.9 4.1 5 3 5V3ZM7 9V10H10V9H7ZM7 11V12H10V11H7ZM10 16V15H7V16H10ZM12 14V13H7V14H12ZM12 8V7H7V8H12Z" />
    </Svg>
  );
};
