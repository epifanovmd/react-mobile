import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FridgeOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L5.00011 6.89047V9.00047H7.11011L8.11011 10.0005H5.00011V19.0005C5.00011 20.1105 5.90011 21.0005 7.00011 21.0005V22.0005H9.00011V21.0005H15.0001V22.0005H17.0001V21.0005C17.5801 21.0005 18.1001 20.7505 18.4601 20.3505L20.8401 22.7305L22.1101 21.4605ZM10.0001 15.0005H8.00011V12.0005H10.0001V15.0005ZM19.0001 15.8005L13.2001 10.0005H19.0001V15.8005ZM8.20011 5.00047L5.70011 2.50047C6.05011 2.19047 6.50011 2.00047 7.00011 2.00047H17.0001C18.1101 2.00047 19.0001 2.90047 19.0001 4.00047V9.00047H12.2001L10.0001 6.80047V5.00047H8.20011Z" />
    </Svg>
  );
};
