import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FridgeVariantOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.39011 1.73047L1.11011 3.00047L5.00011 6.89047V19.0005C5.00011 20.1105 5.90011 21.0005 7.00011 21.0005V22.0005H9.00011V21.0005H11.5001V13.3905L12.5001 14.3905V21.0005H15.0001V22.0005H17.0001V21.0005C17.5801 21.0005 18.1001 20.7505 18.4601 20.3505L20.8401 22.7305L22.1101 21.4605L2.39011 1.73047ZM10.0001 14.0005H7.00011V10.0005H8.11011L10.0001 11.8905V14.0005ZM19.0001 15.8005L12.5001 9.30047V2.00047H17.0001C18.1101 2.00047 19.0001 2.90047 19.0001 4.00047V15.8005ZM11.5001 8.30047L5.70011 2.50047C6.05011 2.19047 6.50011 2.00047 7.00011 2.00047H11.5001V8.30047Z" />
    </Svg>
  );
};
