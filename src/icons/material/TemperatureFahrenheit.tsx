import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TemperatureFahrenheitIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 20V5H20V8H14V11H19V14H14V20H11ZM6 3C6.79565 3 7.55871 3.31607 8.12132 3.87868C8.68393 4.44129 9 5.20435 9 6C9 6.79565 8.68393 7.55871 8.12132 8.12132C7.55871 8.68393 6.79565 9 6 9C5.20435 9 4.44129 8.68393 3.87868 8.12132C3.31607 7.55871 3 6.79565 3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3ZM6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6C5 6.26522 5.10536 6.51957 5.29289 6.70711C5.48043 6.89464 5.73478 7 6 7C6.26522 7 6.51957 6.89464 6.70711 6.70711C6.89464 6.51957 7 6.26522 7 6C7 5.73478 6.89464 5.48043 6.70711 5.29289C6.51957 5.10536 6.26522 5 6 5Z" />
    </Svg>
  );
};
