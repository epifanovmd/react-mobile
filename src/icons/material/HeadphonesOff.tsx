import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadphonesOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10V17C21 17.62 20.81 18.19 20.5 18.67L15 13.18V12H19V10C19 8.14348 18.2625 6.36301 16.9497 5.05025C15.637 3.7375 13.8565 3 12 3C10 3 8.23 3.82 6.96 5.14L5.55 3.72C7.18 2.04 9.47 1 12 1ZM2.78 3.5L20.5 21.22L19.23 22.5L16.73 20H15V18.27L9 12.27V20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V10C3 8.89 3.2 7.82 3.57 6.84L1.5 4.77L2.78 3.5ZM5.17 8.44C5.06 8.94 5 9.46 5 10V12H8.73L5.17 8.44Z" />
    </Svg>
  );
};
