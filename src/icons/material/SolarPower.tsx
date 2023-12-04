import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SolarPowerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11.45 2V5.55L15 3.77L11.45 2ZM10.45 8L8 10.46L11.75 11.71L10.45 8ZM2 11.45L3.77 15L5.55 11.45H2ZM10 2H2V10C2.57 10.17 3.17 10.25 3.77 10.25C7.35 10.26 10.26 7.35 10.27 3.75C10.26 3.16 10.17 2.57 10 2ZM17 22V16H14L19 7V13H22L17 22Z" />
    </Svg>
  );
};
