import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowTopLeftBoldOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.12 8.45997L19.78 14.12L14.12 19.78L8.45997 14.12L4.21997 18.36V4.21997H18.36L14.12 8.45997ZM6.33997 13.41L8.45997 11.29L14.12 16.95L16.95 14.12L11.29 8.46997L13.41 6.33997H6.33997V13.41Z" />
    </Svg>
  );
};
