import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VideoInputScartIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.6 2.19922L17.3 2.39922L13.8 4.39922L13.3 3.49922L2 9.99922V16.9992H3V18.9992C3 20.0992 3.9 20.9992 5 20.9992H15C16.1 20.9992 17 20.0992 17 18.9992V16.9992H18V9.99922H17L16.8 9.59922L20.3 7.59922L22.1 4.79922L20.6 2.19922ZM15 16.9992V18.9992H5V16.9992H15Z" />
    </Svg>
  );
};
