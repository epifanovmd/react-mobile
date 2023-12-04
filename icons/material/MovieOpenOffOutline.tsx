import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MovieOpenOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.7 6.49922L16.9 2.99922L20.8 2.19922L21.6 6.09922L19.7 6.49922ZM22.1 21.4992L20.8 22.7992L20.1 21.9992H3.99998C2.89998 21.9992 1.99998 21.0992 1.99998 19.9992V9.99922H8.09998L7.09998 8.99922L1.99998 9.99922L1.59998 7.99922C1.39998 6.99922 2.09998 5.89922 3.19998 5.69922L3.69998 5.59922L1.09998 2.99922L2.39998 1.69922L22.1 21.4992ZM18.1 19.9992L10.1 11.9992H3.99998V19.9992H18.1ZM22 18.7992V9.99922H13.2L15.2 11.9992H20V16.7992L22 18.7992ZM16.7 7.09922L14 3.49922L12 3.89922L14.8 7.39922L16.7 7.09922ZM11.8 7.99922L9.09998 4.49922L7.89998 4.69922L11.3 8.09922L11.8 7.99922Z" />
    </Svg>
  );
};
