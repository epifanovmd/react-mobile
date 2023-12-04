import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UnityIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.11 17H7.49997L2.58997 12L7.49997 7H10.11L11.42 4.74L18.21 3L20.08 9.74L18.77 12L20.08 14.26L18.21 21L11.42 19.26L10.11 17ZM10.25 16.75L15.38 18.13L12.42 13H6.49997L10.25 16.75ZM17.12 17.13L18.5 12L17.12 6.87L14.15 12L17.12 17.13ZM10.25 7.25L6.49997 11H12.42L15.38 5.87L10.25 7.25Z" />
    </Svg>
  );
};
