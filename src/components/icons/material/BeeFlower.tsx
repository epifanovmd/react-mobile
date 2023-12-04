import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BeeFlowerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.6 13.0002V12.9002L11.3 12.6002H11.2L9.60005 12.0002C10 11.7002 10.4 11.5002 10.9 11.5002C11.4 11.5002 11.9 11.7002 12.3 12.1002C12.7 12.5002 12.9 12.9002 12.9 13.4002C12.9 13.9002 12.8 14.3002 12.4 14.7002L11.6 13.0002ZM9.70005 19.3002C9.40005 18.3002 9.60005 17.1002 10.4 15.5002L11.6 18.6002C11.8 19.2002 11.6 19.6002 11 19.9002C10.4 20.2002 10 20.0002 9.70005 19.3002ZM4.10005 13.1002C4.30005 12.5002 4.70005 12.3002 5.30005 12.5002L8.50005 13.7002C6.90005 14.5002 5.70005 14.7002 4.70005 14.4002C4.10005 14.1002 3.90005 13.7002 4.10005 13.1002ZM12 8.1002H11V9.5002H10.6C9.50005 9.5002 8.60005 9.9002 7.80005 10.7002L7.40005 11.3002L6.00005 10.5002C5.70005 10.4002 5.40005 10.4002 5.00005 10.4002C4.40005 10.4002 3.80005 10.6002 3.30005 11.0002C2.80005 11.4002 2.40005 11.8002 2.20005 12.4002C2.00005 13.1002 2.00005 13.7002 2.20005 14.4002C2.50005 15.1002 2.80005 15.6002 3.30005 15.9002C2.90005 17.4002 3.20005 18.7002 4.30005 19.8002C5.10005 20.6002 6.00005 21.0002 7.10005 21.0002C7.60005 21.0002 7.90005 21.0002 8.20005 20.9002C8.80005 21.7002 9.60005 22.2002 10.6 22.2002C10.9 22.2002 11.3 22.2002 11.6 22.1002C12.2 21.9002 12.6 21.5002 13 21.0002C13.4 20.4002 13.6 19.9002 13.6 19.3002C13.6 18.9002 13.6 18.6002 13.5 18.3002L12.9 16.9002L13.5 16.5002C14.3 15.7002 14.7 14.6002 14.6 13.4002H16V12.4002H14.4C14 11.2002 13.2 10.4002 12 10.0002V8.1002ZM17.3 6.8002C17.1 6.6002 17 6.3002 17 6.1002C17 5.8002 17.1 5.6002 17.3 5.4002C17.5 5.2002 17.7 5.1002 18 5.1002C18.3 5.1002 18.5 5.2002 18.7001 5.4002C18.9001 5.5002 19 5.8002 19 6.1002C19 6.4002 18.9001 6.6002 18.7001 6.8002C18.5 7.0002 18.3 7.0002 18 7.0002C17.7 7.0002 17.5 7.0002 17.3 6.8002ZM20.7001 4.1002H19.6L19.3 3.2002C19.1 2.5002 18.7 2.2002 18 2.2002C17.3 2.2002 16.8 2.5002 16.7 3.2002L16.4 4.1002H15.3C14.7 4.1002 14.3 4.4002 14 5.0002C13.8 5.6002 14 6.1002 14.6 6.5002L15.5 7.0002L15.1 8.2002C14.9 8.6002 15 9.0002 15.2 9.4002C15.5 9.8002 15.8 10.0002 16.3 10.0002C16.7 10.0002 17 9.9002 17.2 9.7002L18 9.1002L18.8 9.8002C19 9.9002 19.3001 10.0002 19.7001 10.0002C20.2001 10.0002 20.5 9.8002 20.8 9.4002C21 9.0002 21.1 8.6002 20.9 8.2002L20.5 7.0002L21.3 6.5002C21.9 6.1002 22.1 5.6002 21.9 5.0002C21.7 4.3002 21.3001 4.1002 20.7001 4.1002Z" />
    </Svg>
  );
};
