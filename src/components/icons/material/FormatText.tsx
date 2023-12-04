import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatTextIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.5 4L19.66 8.35L18.7 8.61C18.25 7.74 17.79 6.87 17.26 6.43C16.73 6 16.11 6 15.5 6H13V16.5C13 17 13 17.5 13.33 17.75C13.67 18 14.33 18 15 18V19H8.99997V18C9.66997 18 10.33 18 10.67 17.75C11 17.5 11 17 11 16.5V6H8.49997C7.88997 6 7.26997 6 6.73997 6.43C6.20997 6.87 5.74997 7.74 5.29997 8.61L4.33997 8.35L5.49997 4H18.5Z" />
    </Svg>
  );
};
