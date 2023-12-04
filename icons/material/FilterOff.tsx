import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FilterOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.39011 1.73047L1.11011 3.00047L9.50011 11.3705L9.97011 12.0005H10.0001V17.8705C9.96011 18.1605 10.0601 18.4705 10.2901 18.7005L12.3001 20.7105C12.6901 21.1005 13.3201 21.1005 13.7101 20.7105C13.9401 20.5005 14.0401 20.1805 14.0001 19.8805V15.8905L20.8401 22.7305L22.1101 21.4605L14.0001 13.3505L9.41011 8.76047L4.15011 3.50047L2.39011 1.73047ZM6.21011 3.00047L14.5401 11.3405L19.7901 4.62047C20.1301 4.19047 20.0501 3.56047 19.6201 3.22047C19.4301 3.08047 19.2201 3.00047 19.0001 3.00047H6.21011Z" />
    </Svg>
  );
};
