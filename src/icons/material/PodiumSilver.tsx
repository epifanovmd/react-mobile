import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PodiumSilverIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 10.09L22.45 11.58L21.8 8.77L24 6.89L21.11 6.64L20 4L18.87 6.64L16 6.89L18.18 8.77L17.5 11.58L20 10.09ZM23 23H17V13H23V23ZM1 17V23H7V17H1ZM5 21H3V19H5V21ZM9 10V23H15V10H9ZM13 21H11V12H13V21Z" />
    </Svg>
  );
};
