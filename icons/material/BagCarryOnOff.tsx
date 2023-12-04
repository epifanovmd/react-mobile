import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BagCarryOnOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.1001 4.9L6.0001 8.9V19C6.0001 19.5 6.2001 20 6.6001 20.4C7.0001 20.8 7.5001 21 8.0001 21V10.8L9.0001 11.8V21H13.2001C13.1001 20.6 13.0001 20.2 13.0001 20C13.0001 18.8 13.5001 18 14.6001 17.4L15.4001 18.2C14.5001 18.5 14.1001 19.2 14.1001 20.1C14.1001 20.6 14.3001 21.1 14.7001 21.5C15.0001 21.8 15.5001 22 16.0001 22C16.9001 22 17.6001 21.6 17.9001 20.7L19.1001 21.9L20.5001 20.5L3.5001 3.5L2.1001 4.9ZM12.0001 2C12.0001 2.5 12.2001 3 12.6001 3.4C13.0001 3.8 13.5001 4 14.0001 4V7H9.8001L16.0001 13.2V2H12.0001Z" />
    </Svg>
  );
};
