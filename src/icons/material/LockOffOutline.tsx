import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LockOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.99999 5.82L7.35999 4.16C8.08999 2.31 9.88999 1 12 1C14.76 1 17 3.24 17 6V8H18C19.11 8 20 8.9 20 10V16.8L18 14.8V10H13.2L11.2 8H15V6C15 4.34 13.66 3 12 3C10.41 3 9.10999 4.25 8.99999 5.82ZM22.11 21.46L20.84 22.73L19.46 21.35C19.1 21.75 18.58 22 18 22H5.99999C4.88999 22 3.99999 21.1 3.99999 20V10C3.99999 8.89 4.88999 8 5.99999 8H6.10999L1.10999 3L2.38999 1.73L22.11 21.46ZM18 19.89L13.85 15.74C13.56 16.5 12.84 17 12 17C10.89 17 9.99999 16.1 9.99999 15C9.99999 14.15 10.5 13.44 11.26 13.15L8.10998 10H5.99999V20H18V19.89Z" />
    </Svg>
  );
};
