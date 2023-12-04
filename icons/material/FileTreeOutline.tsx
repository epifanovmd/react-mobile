import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FileTreeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 13H7V18H12V20H5V10H7V11H12V13ZM8 4V6H4V4H8ZM10 2H2V8H10V2ZM20 11V13H16V11H20ZM22 9H14V15H22V9ZM20 18V20H16V18H20ZM22 16H14V22H22V16Z" />
    </Svg>
  );
};
