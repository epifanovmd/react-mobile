import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TextBoxMinusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 17V19H14V17H22ZM5 3H19C20.11 3 21 3.89 21 5V12.8C20.39 12.45 19.72 12.2 19 12.08V5H5V19H12.08C12.2 19.72 12.45 20.39 12.8 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3ZM7 7H17V9H7V7ZM7 11H17V12.08C16.15 12.22 15.37 12.54 14.68 13H7V11ZM7 15H12V17H7V15Z" />
    </Svg>
  );
};
