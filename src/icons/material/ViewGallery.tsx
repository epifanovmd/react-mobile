import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewGalleryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 3H2V16H21V3ZM2 17H6V21H2V17ZM7 17H11V21H7V17ZM12 17H16V21H12V17ZM17 17H21V21H17V17Z" />
    </Svg>
  );
};
