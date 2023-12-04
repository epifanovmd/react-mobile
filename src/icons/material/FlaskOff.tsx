import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlaskOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22.1001 21.5002L2.4001 1.7002L1.1001 3.0002L7.9001 9.8002L3.5001 17.4002C3.2001 17.8002 3.0001 18.4002 3.0001 19.0002C3.0001 20.7002 4.3001 22.0002 6.0001 22.0002H18.0001C18.6001 22.0002 19.2001 21.8002 19.6001 21.5002L20.8001 22.7002L22.1001 21.5002ZM18.0001 20.0002H6.0001C5.4001 20.0002 5.0001 19.6002 5.0001 19.0002C5.0001 18.8002 5.1001 18.6002 5.2001 18.4002L9.0001 11.9002L14.0001 17.0002L14.6001 16.4002L18.0001 20.0002C18.1001 20.0002 18.0001 20.0002 18.0001 20.0002ZM8.0001 4.8002V4.0002C8.0001 2.9002 8.9001 2.0002 10.0001 2.0002H14.0001C15.1001 2.0002 16.0001 2.9002 16.0001 4.0002V5.0002C16.0001 5.6002 15.6001 6.0002 15.0001 6.0002V7.8002L20.4001 17.2002L8.0001 4.8002Z" />
    </Svg>
  );
};