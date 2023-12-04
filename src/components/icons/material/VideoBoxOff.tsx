import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VideoBoxOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 8H6.73L14 15.27V16H6V8ZM2.27 1L1 2.27L3 4.28C2.41 4.62 2 5.26 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H18.73L20.73 22L22 20.73L2.27 1ZM20 4H7.82L11.82 8H14V10.18L14.57 10.75L18 8V14.18L22 18.17C22 18.11 22 18.06 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z" />
    </Svg>
  );
};
