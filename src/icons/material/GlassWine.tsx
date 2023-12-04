import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GlassWineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.5 21.27L14.66 21.18C13.9 21.11 13.25 20.6 13 19.87C12.47 17.91 12.47 15.83 13 13.87C15.32 13.4 17 11.37 17 9C17 7 15 2 15 2H9C9 2 7 7 7 9C7 11.38 8.67 13.42 11 13.9C11.53 15.86 11.53 17.94 11 19.9C10.76 20.62 10.12 21.13 9.37 21.21L8.5 21.3C8.5 21.3 8 21.28 8 22H16C16 21.28 15.5 21.27 15.5 21.27ZM9.44 7L10.44 4H13.56L14.56 7H9.44Z" />
    </Svg>
  );
};
