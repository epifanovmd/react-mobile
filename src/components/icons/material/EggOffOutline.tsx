import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const EggOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.11 21.4605L2.38999 1.73047L1.10999 3.00047L6.09999 8.00047C5.09999 10.2805 4.49999 12.7605 4.49999 14.5005C4.49999 18.6405 7.85999 22.0005 12 22.0005C14.23 22.0005 16.22 21.0005 17.59 19.5005L20.84 22.7305L22.11 21.4605ZM12 20.0005C8.96999 20.0005 6.49999 17.5305 6.49999 14.5005C6.49999 13.0805 6.94999 11.2505 7.62999 9.50047L16.17 18.0605C15.16 19.2405 13.67 20.0005 12 20.0005ZM9.35999 6.16047L7.91999 4.72047C9.09999 3.11047 10.5 2.00047 12 2.00047C16.14 2.00047 19.5 10.3605 19.5 14.5005C19.5 15.0605 19.43 15.6005 19.32 16.1205L17.5 14.2905C17.38 10.4605 14.28 4.00047 12 4.00047C11.17 4.00047 10.22 4.87047 9.35999 6.16047Z" />
    </Svg>
  );
};
