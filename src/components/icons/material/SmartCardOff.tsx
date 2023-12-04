import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SmartCardOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.39 1.73047L1.11 3.00047L1.27 3.16047C0.545 3.47047 0.028 4.17047 0 5.00047V19.0005C0.036 20.0905 0.911 20.9605 2 21.0005H19.11L20.84 22.7305L22.11 21.4605L2.39 1.73047ZM14 18.0005H2V17.0005C2 15.0005 6 13.9105 8 13.9105C10 13.9105 14 15.0005 14 17.0005V18.0005ZM8 12.0005C6.34 12.0005 5 10.6605 5 9.00047C5 8.40047 5.18 7.84047 5.5 7.38047L9.62 11.5005C9.16 11.8205 8.6 12.0005 8 12.0005ZM22 3.00047H6.2L9.88 6.68047C10.04 6.81047 10.19 6.96047 10.32 7.12047L23.5 20.2905C23.79 19.9405 24 19.5005 24 19.0005V5.00047C23.96 3.91047 23.09 3.04047 22 3.00047ZM21 13.0005H17V10.0005H21V13.0005Z" />
    </Svg>
  );
};
