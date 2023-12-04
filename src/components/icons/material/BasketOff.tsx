import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BasketOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 9.99998L22.96 10.29L20.9 17.7L12.2 8.99998H15L12 4.73998L10.32 7.11998L8.89 5.68998L11.18 2.42998C11.36 2.16998 11.66 1.99998 12 1.99998C12.34 1.99998 12.65 2.16998 12.83 2.43998L17.42 8.99998H22C22.55 8.99998 23 9.44998 23 9.99998ZM22.11 21.46L20.84 22.73L19.03 20.92C18.86 20.97 18.68 21 18.5 21H5.5C4.72 21 4.04 20.55 3.71 19.9L1.1 10.44L1 9.99998C1 9.44998 1.45 8.99998 2 8.99998H6.58L6.8 8.68998L1.11 2.99998L2.39 1.72998L22.11 21.46ZM13.85 15.74L11.26 13.15C10.5 13.44 10 14.16 10 15C10 16.11 10.9 17 12 17C12.84 17 13.56 16.5 13.85 15.74Z" />
    </Svg>
  );
};
