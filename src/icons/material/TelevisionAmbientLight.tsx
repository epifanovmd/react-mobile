import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TelevisionAmbientLightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 11H0V9H3V11ZM3 14H0V16H3V14ZM5 5.12L2.88 3L1.46 4.41L3.59 6.54L5 5.12ZM10 5V2H8V5H10ZM24 9H21V11H24V9ZM16 5V2H14V5H16ZM20.41 6.54L22.54 4.42L21.12 3L19 5.12L20.41 6.54ZM24 14H21V16H24V14ZM19 9V16C19 17.1 18.1 18 17 18H15V20H9V18H7C5.9 18 5 17.1 5 16V9C5 7.9 5.9 7 7 7H17C18.1 7 19 7.9 19 9ZM17 9H7V16H17V9ZM19 19.88L21.12 22L22.54 20.59L20.41 18.47L19 19.88ZM3.59 18.46L1.47 20.59L2.88 22L5 19.88L3.59 18.46Z" />
    </Svg>
  );
};
