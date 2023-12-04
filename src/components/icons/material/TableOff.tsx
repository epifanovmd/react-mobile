import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TableOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.11 21.4605L2.38999 1.73047L1.10999 3.00047L3.21999 5.11047C3.07999 5.38047 2.99999 5.68047 2.99999 6.00047V18.0005C2.99999 19.1105 3.89999 20.0005 4.99999 20.0005H18.11L20.84 22.7305L22.11 21.4605ZM10.11 12.0005H4.99999V8.00047H6.10999L10.11 12.0005ZM11 18.0005H4.99999V14.0005H11V18.0005ZM13 18.0005V14.8905L16.11 18.0005H13ZM13 9.80047L7.19999 4.00047H19C20.11 4.00047 21 4.89047 21 6.00047V17.8005L19 15.8005V14.0005H17.2L15.2 12.0005H19V8.00047H13V9.80047Z" />
    </Svg>
  );
};
