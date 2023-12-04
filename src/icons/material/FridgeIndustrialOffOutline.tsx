import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FridgeIndustrialOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7.19999 4.00047L5.69999 2.50047C6.04998 2.19047 6.49999 2.00047 6.99999 2.00047H17C18.11 2.00047 19 2.90047 19 4.00047V15.8005L17 13.8005V4.00047H7.19999ZM22.11 21.4605L20.84 22.7305L18.46 20.3505C18.1 20.7505 17.58 21.0005 17 21.0005V22.0005H15V21.0005H8.99999V22.0005H6.99999V21.0005C5.89999 21.0005 4.99999 20.1105 4.99999 19.0005V6.89047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605ZM17 18.8905L9.99999 11.8905V15.0005H7.99999V10.0005H8.10998L6.99999 8.89047V19.0005H17V18.8905Z" />
    </Svg>
  );
};
