import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BookOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.99989 14.8L3.99989 16.8V3.99998C3.99989 2.89998 4.88989 1.99998 5.99989 1.99998H17.9999C18.2399 1.99998 18.4699 2.03998 18.6799 2.11998L16.7999 3.99998H12.9999V7.79998L10.7899 9.99998L10.4999 9.74998L7.99989 12V3.99998H5.99989V14.8ZM22.8899 2.99998L19.9999 5.88998V20C19.9999 21.11 19.1099 22 17.9999 22H5.99989C5.41989 22 4.89989 21.75 4.53989 21.35L3.15989 22.73L1.88989 21.46L21.6099 1.72998L22.8899 2.99998ZM17.9999 7.88998L5.99989 19.89V20H17.9999V7.88998Z" />
    </Svg>
  );
};
