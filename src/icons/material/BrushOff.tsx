import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BrushOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8001 22.7002L12.4001 14.3002L11.8001 15.0002L9.0001 12.2002L9.7001 11.5002L1.1001 3.0002L2.4001 1.7002L22.1001 21.4002L20.8001 22.7002ZM7.0001 14.0002C5.3001 14.0002 4.0001 15.3002 4.0001 17.0002C4.0001 18.3002 2.8001 19.0002 2.0001 19.0002C2.9001 20.2002 4.5001 21.0002 6.0001 21.0002C8.2001 21.0002 10.0001 19.2002 10.0001 17.0002C10.0001 15.3002 8.7001 14.0002 7.0001 14.0002ZM20.7001 6.0002C21.1001 5.6002 21.1001 5.0002 20.7001 4.6002L19.4001 3.3002C19.0001 2.9002 18.4001 2.9002 18.0001 3.3002L12.2001 9.0002L15.0001 11.8002L20.7001 6.0002Z" />
    </Svg>
  );
};
