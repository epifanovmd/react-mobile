import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FeatureSearchOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.5 2C13 2 11 4 11 6.5C11 9 13 11 15.5 11C16.4 11 17.2 10.7 17.9 10.3L21 13.4L22.4 12L19.3 8.9C19.7 8.2 20 7.4 20 6.5C20 4 18 2 15.5 2ZM4 4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V15L18 13V20H4V6H9.03C9.09 5.3 9.26 4.65 9.5 4H4ZM15.5 4C16.9 4 18 5.1 18 6.5C18 7.9 16.9 9 15.5 9C14.1 9 13 7.9 13 6.5C13 5.1 14.1 4 15.5 4Z" />
    </Svg>
  );
};
