import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MovieOpenOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.2 9.99922H22V18.7992L13.2 9.99922ZM21.6 6.09922L20.8 2.19922L16.9 2.99922L19.6 6.49922L21.6 6.09922ZM11.8 7.99922L9.09998 4.49922L7.89998 4.69922L11.3 8.09922L11.8 7.99922ZM2.39998 1.69922L1.09998 2.99922L3.69998 5.59922L3.19998 5.69922C2.09998 5.89922 1.39998 6.99922 1.59998 7.99922L1.99998 9.99922L7.09998 8.99922L8.09998 9.99922H1.99998V19.9992C1.99998 21.0992 2.89998 21.9992 3.99998 21.9992H20.1L20.8 22.6992L22.1 21.3992L2.39998 1.69922ZM16.7 7.09922L14 3.49922L12 3.89922L14.8 7.39922L16.7 7.09922Z" />
    </Svg>
  );
};
