import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SmartCardOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 13.0005H16.2L15 11.8005V10.0005H19V13.0005ZM22 3.00047H6.2L8.2 5.00047H22V18.8005L23.5 20.2905C23.79 19.9405 24 19.5005 24 19.0005V5.00047C23.96 3.91047 23.09 3.04047 22 3.00047ZM22.11 21.4605L20.84 22.7305L19.11 21.0005H2C0.911 20.9605 0.036 20.0905 0 19.0005V5.00047C0.028 4.17047 0.545 3.47047 1.27 3.16047L1.11 3.00047L2.39 1.73047L22.11 21.4605ZM17.11 19.0005L14 15.8905V17.0005H4V15.7505C4 14.0905 7.34 13.2505 9 13.2505C9.78 13.2505 10.91 13.4405 11.91 13.8005L9.91 11.8005C9.63 11.9205 9.33 12.0005 9 12.0005C7.62 12.0005 6.5 10.8805 6.5 9.50047C6.5 9.17047 6.58 8.87047 6.7 8.59047L3.11 5.00047H2V19.0005H17.11Z" />
    </Svg>
  );
};
