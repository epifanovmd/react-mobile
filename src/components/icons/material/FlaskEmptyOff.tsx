import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FlaskEmptyOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8001 22.7002L19.6001 21.5002C19.1001 21.8002 18.6001 22.0002 18.0001 22.0002H6.0001C4.3001 22.0002 3.0001 20.7002 3.0001 19.0002C3.0001 18.4002 3.2001 17.8002 3.5001 17.4002L7.9001 9.8002L1.1001 3.0002L2.4001 1.7002L22.1001 21.4002L20.8001 22.7002ZM15.0001 7.8002V6.0002C15.6001 6.0002 16.0001 5.6002 16.0001 5.0002V4.0002C16.0001 2.9002 15.1001 2.0002 14.0001 2.0002H10.0001C8.9001 2.0002 8.0001 2.9002 8.0001 4.0002V4.8002L20.4001 17.2002L15.0001 7.8002Z" />
    </Svg>
  );
};
