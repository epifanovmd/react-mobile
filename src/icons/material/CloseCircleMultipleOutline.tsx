import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloseCircleMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18.54 9.88L17.12 8.47L15 10.59L12.88 8.47L11.47 9.88L13.59 12L11.47 14.12L12.88 15.54L15 13.41L17.12 15.54L18.54 14.12L16.41 12L18.54 9.88ZM2 12C2 9.21 3.64 6.8 6 5.68V3.5C2.5 4.76 0 8.09 0 12C0 15.91 2.5 19.24 6 20.5V18.32C3.64 17.2 2 14.79 2 12ZM15 3C10.04 3 6 7.04 6 12C6 16.96 10.04 21 15 21C19.96 21 24 16.96 24 12C24 7.04 19.96 3 15 3ZM15 19C11.14 19 8 15.86 8 12C8 8.14 11.14 5 15 5C18.86 5 22 8.14 22 12C22 15.86 18.86 19 15 19Z" />
    </Svg>
  );
};
