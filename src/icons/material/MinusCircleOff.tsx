import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MinusCircleOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22.1001 21.4992L2.4001 1.69922L1.1001 2.99922L4.1001 5.99922C2.8001 7.59922 2.0001 9.69922 2.0001 11.9992C2.0001 17.4992 6.5001 21.9992 12.0001 21.9992C14.3001 21.9992 16.4001 21.1992 18.0001 19.8992L20.8001 22.6992L22.1001 21.4992ZM7.0001 12.9992V10.9992H9.1001L11.1001 12.9992H7.0001ZM14.2001 10.9992L6.7001 3.49922C8.3001 2.59922 10.1001 1.99922 12.0001 1.99922C17.5001 1.99922 22.0001 6.49922 22.0001 11.9992C22.0001 13.8992 21.4001 15.6992 20.5001 17.2992L16.2001 12.9992H17.0001V10.9992H14.2001Z" />
    </Svg>
  );
};
