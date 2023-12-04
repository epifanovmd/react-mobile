import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5ZM6.4 6.5H17.6C18.37 6.5 19 7.12 19 7.9V16.1C19 16.4713 18.8525 16.8274 18.5899 17.0899C18.3274 17.3525 17.9713 17.5 17.6 17.5H6.4C5.63 17.5 5 16.87 5 16.1V7.9C5 7.12 5.62 6.5 6.4 6.5ZM6 8V10L12 14L18 10V8L12 12L6 8Z" />
    </Svg>
  );
};
