import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const OcrIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5V19H14V17H12C10.89 17 10 16.11 10 15V9C10 7.89 10.89 7 12 7H14V5H2ZM14 7V9H16V7H14ZM14 9H12V15H14V9ZM14 15V17H16V15H14ZM5 7H7C8.11 7 9 7.89 9 9V15C9 16.11 8.11 17 7 17H5C3.89 17 3 16.11 3 15V9C3 7.89 3.89 7 5 7ZM17 7V17H19V13H20V14H21V17H23V14H22V12H23V8H22V7H17ZM5 9V15H7V9H5ZM19 9H21V11H19V9Z" />
    </Svg>
  );
};
