import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MirrorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 1C16.69 1 20.5 5.93 20.5 12C20.5 18.08 16.69 23 12 23C7.31 23 3.5 18.08 3.5 12C3.5 5.93 7.31 1 12 1ZM12 3C8.41 3 5.5 7.03 5.5 12C5.5 16.97 8.41 21 12 21C15.59 21 18.5 16.97 18.5 12C18.5 7.03 15.59 3 12 3ZM8.29 10.28L11.53 7.03L12.59 8.09L9.35 11.34L8.29 10.28ZM8.7 14.61L14.36 8.95L15.42 10L9.76 15.67L8.7 14.61Z" />
    </Svg>
  );
};
