import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EmailReceiveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 20H18V23L13 18.5L18 14V17H22V20ZM20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H11.35C11.1166 19.3591 10.9982 18.6821 11 18C11.0014 16.7116 11.4175 15.4579 12.1867 14.4244C12.9559 13.3908 14.0374 12.6323 15.2711 12.2611C16.5048 11.8899 17.8253 11.9256 19.0371 12.363C20.249 12.8005 21.2878 13.6164 22 14.69V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
    </Svg>
  );
};
