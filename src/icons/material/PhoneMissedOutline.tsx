import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneMissedOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.6 15.5V17.3C19.3 17.7 19.9 18.1 20.5 18.6L21.6 17.5C20.7 16.6 19.7 16 18.6 15.5ZM5.4 15.5C4.4 16 3.4 16.6 2.5 17.4L3.6 18.5C4.2 18 4.8 17.6 5.5 17.2V15.5H5.4ZM12 12C16.5 12 20.7 13.7 23.7 16.7C23.9 16.9 24 17.1 24 17.4C24 17.7 23.9 17.9 23.7 18.1L21.2 20.6C21 20.8 20.8 20.9 20.5 20.9C20.3 20.9 20 20.8 19.8 20.6C19 19.9 18.1 19.2 17.1 18.8C16.8 18.6 16.5 18.3 16.5 17.9V14.8C15 14.3 13.5 14.1 11.9 14.1C10.3 14.1 8.8 14.3 7.3 14.8V17.9C7.3 18.3 7.1 18.6 6.7 18.8C5.7 19.3 4.8 19.9 4 20.6C3.8 20.8 3.6 20.9 3.3 20.9C3 20.9 2.8 20.8 2.6 20.6L0.1 18.1C0.1 17.9 0 17.6 0 17.4C0 17.1 0.1 16.9 0.3 16.7C3.3 13.8 7.5 12 12 12ZM6.5 5.5V9H5V3H11V4.5H7.5L12 9L18 3L19 4L12 11L6.5 5.5Z" />
    </Svg>
  );
};
