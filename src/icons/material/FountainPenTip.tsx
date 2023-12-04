import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FountainPenTipIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.54 3.5L20.5 8.47L19.07 9.88L14.12 4.93L15.54 3.5ZM3.5 19.78L10 13.31C9.9 13 9.97 12.61 10.23 12.35C10.62 11.96 11.26 11.96 11.65 12.35C12.04 12.75 12.04 13.38 11.65 13.77C11.39 14.03 11 14.1 10.69 14L4.22 20.5L14.83 16.95L18.36 10.59L13.42 5.64L7.05 9.17L3.5 19.78Z" />
    </Svg>
  );
};
