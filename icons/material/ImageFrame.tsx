import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ImageFrameIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 14.29L6.5 19H17.46L14.75 15.46L12.78 17.8L10 14.29ZM5 21V7H18.96V21H5ZM12 2.4L14.61 5.03H9.37L12 2.4ZM5 5.03C4.5 5.03 4 5.22 3.61 5.61C3.2 6 3 6.46 3 7V21C3 21.5 3.2 22 3.61 22.39C4 22.8 4.5 23 5 23H18.96C19.5 23 19.96 22.8 20.37 22.39C20.77 22 21 21.5 21 21V7C21 6.46 20.77 6 20.37 5.61C19.96 5.22 19.5 5.03 18.96 5.03H16L12 1L7.96 5.03H5Z" />
    </Svg>
  );
};
