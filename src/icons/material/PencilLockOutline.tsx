import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PencilLockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.1 9L17 9.9L7.9 19H7V18.1L16.1 9ZM19.7 3C19.5 3 19.2 3.1 19 3.3L17.2 5.1L20.9 8.9L22.7 7C23.1 6.6 23.1 6 22.7 5.6L20.4 3.3C20.2 3.1 19.9 3 19.7 3ZM16.1 6.2L5 17.2V21H8.8L19.8 9.9L16.1 6.2ZM8 5V4.5C8 3.1 6.9 2 5.5 2C4.1 2 3 3.1 3 4.5V5C2.4 5 2 5.4 2 6V10C2 10.6 2.4 11 3 11H8C8.6 11 9 10.6 9 10V6C9 5.4 8.6 5 8 5ZM7 5H4V4.5C4 3.7 4.7 3 5.5 3C6.3 3 7 3.7 7 4.5V5Z" />
    </Svg>
  );
};
