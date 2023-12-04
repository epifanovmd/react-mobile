import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PickaxeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.79 10.6191L3.49998 21.8991L2.09998 20.4991L13.38 9.20914L14.79 10.6191ZM19.27 7.72914L19.86 7.13914L19.07 6.34914L19.71 5.70914L18.29 4.28914L17.65 4.92914L16.86 4.13914L16.27 4.72914C14.53 3.30914 12.57 2.16914 10.47 1.36914L9.63998 3.15914C11.39 4.07914 13 5.18914 14.5 6.49914L14 6.99914L17 9.99914L17.5 9.49914C18.81 10.9991 19.92 12.6091 20.84 14.3591L22.63 13.5291C21.83 11.4291 20.69 9.46914 19.27 7.72914Z" />
    </Svg>
  );
};
