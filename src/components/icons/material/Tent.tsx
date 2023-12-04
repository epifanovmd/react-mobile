import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TentIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 6C4 7.19 4.39 8.27 5 9C4.20435 9 3.44129 8.68393 2.87868 8.12132C2.31607 7.55871 2 6.79565 2 6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3C4.39 3.73 4 4.81 4 6ZM2 21V19H4.76L12 4.78L19.24 19H22V21H2ZM12 9.19L7 19H17L12 9.19Z" />
    </Svg>
  );
};
