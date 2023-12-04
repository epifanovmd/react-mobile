import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CakeLayeredIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 21V17C21 15.89 20.1 15 19 15H18V12C18 10.89 17.1 10 16 10H13V8H11V10H8C6.89 10 6 10.89 6 12V15H5C3.89 15 3 15.89 3 17V21H1V23H23V21H21ZM12 7C12.5304 7 13.0391 6.78929 13.4142 6.41421C13.7893 6.03914 14 5.53043 14 5C14 4.62 13.9 4.27 13.71 3.97L12 1L10.28 3.97C10.1 4.27 10 4.62 10 5C10 5.53043 10.2107 6.03914 10.5858 6.41421C10.9609 6.78929 11.4696 7 12 7Z" />
    </Svg>
  );
};
