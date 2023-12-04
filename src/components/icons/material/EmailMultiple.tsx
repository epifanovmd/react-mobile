import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const EmailMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 6V4L14 9L6 4V6L14 11L22 6ZM22 2C22.5304 2 23.0391 2.21071 23.4142 2.58579C23.7893 2.96086 24 3.46957 24 4V16C24 16.5304 23.7893 17.0391 23.4142 17.4142C23.0391 17.7893 22.5304 18 22 18H6C4.89 18 4 17.1 4 16V4C4 2.89 4.89 2 6 2H22ZM2 6V20H20V22H2C1.46957 22 0.960859 21.7893 0.585786 21.4142C0.210714 21.0391 0 20.5304 0 20V6H2Z" />
    </Svg>
  );
};
