import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BasketOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.39 1.72998L1.11 2.99998L6.92 8.80998L6.79 8.99998H2C1.45 8.99998 1 9.44998 1 9.99998C1 10.09 1 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C18.68 21 18.86 20.96 19.03 20.92L20.84 22.73L22.11 21.46L2.39 1.72998ZM5.5 19L3.31 11H9.11L11.26 13.15C10.5 13.44 10 14.16 10 15C10 16.1 10.9 17 12 17C12.84 17 13.56 16.5 13.85 15.74L17.11 19H5.5ZM23 9.99998L22.97 10.27L20.93 17.73L19.3 16.1L20.7 11H14.2L12.2 8.99998H14.8L12 4.79998L10.4 7.19998L8.96 5.75998L11.17 2.44998C11.36 2.15998 11.68 1.99998 12 1.99998C12.32 1.99998 12.64 2.15998 12.83 2.43998L17.21 8.99998H22C22.55 8.99998 23 9.44998 23 9.99998Z" />
    </Svg>
  );
};
