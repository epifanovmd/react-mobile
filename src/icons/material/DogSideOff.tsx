import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DogSideOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.0001 10.0005L15.0001 7.00047L19.0001 3.00047V5.00047L22.0001 8.00047L20.0001 10.0005L19.0001 9.00047L18.0001 10.0005ZM17.0001 11.0005L14.0001 8.00047L13.0001 9.00047H12.2001L17.0001 13.8005V11.0005ZM2.39011 1.73047L1.11011 3.00047L7.11011 9.00047H5.00011L3.00011 7.00047L2.00011 8.00047L5.00011 11.0005V14.0005L4.00011 15.0005V21.0005H6.00011V18.0005L8.00011 15.0005H13.1101L15.0001 16.8905V21.0005H17.0001V18.8905L20.8401 22.7305L22.1101 21.4605L2.39011 1.73047Z" />
    </Svg>
  );
};
