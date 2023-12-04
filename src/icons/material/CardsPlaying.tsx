import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsPlayingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.7 2.2002H16.2C17.3 2.2002 18.2 3.1002 18.2 4.2002V10.6002L14.7 2.2002ZM20.1 3.8002L21.4 4.4002C22.4 4.8002 22.9 6.0002 22.5 7.0002L20.1 12.9002V3.8002ZM18 15.5002L13 3.5002C12.7 2.7002 12 2.3002 11.2 2.3002C10.9 2.3002 10.7 2.4002 10.4 2.5002L2.99999 5.5002C1.99999 5.9002 1.49999 7.0002 1.99999 8.0002L6.99999 20.0002C7.29999 20.8002 7.99999 21.2002 8.79999 21.2002C9.09999 21.2002 9.29999 21.2002 9.59999 21.0002L17 18.0002C17.8 17.7002 18.2 17.0002 18.2 16.2002C18.1 16.0002 18.1 15.7002 18 15.5002ZM11.4 15.0002L8.19999 12.6002L8.59999 8.6002L11.8 11.0002L11.4 15.0002Z" />
    </Svg>
  );
};
