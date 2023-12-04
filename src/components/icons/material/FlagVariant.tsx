import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FlagVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 3C6.26522 3 6.51957 3.10536 6.70711 3.29289C6.89464 3.48043 7 3.73478 7 4V4.88C8.06 4.44 9.5 4 11 4C14 4 14 6 16 6C19 6 20 4 20 4V12C20 12 19 14 16 14C13 14 13 12 11 12C8 12 7 14 7 14V21H5V4C5 3.73478 5.10536 3.48043 5.29289 3.29289C5.48043 3.10536 5.73478 3 6 3Z" />
    </Svg>
  );
};
