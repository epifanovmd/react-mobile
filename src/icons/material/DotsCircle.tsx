import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DotsCircleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 19C13.1 19 14 19.9 14 21C14 22.1 13.1 23 12 23C10.9 23 10 22.1 10 21C10 19.9 10.9 19 12 19ZM12 1C13.1 1 14 1.9 14 3C14 4.1 13.1 5 12 5C10.9 5 10 4.1 10 3C10 1.9 10.9 1 12 1ZM6 16C7.1 16 8 16.9 8 18C8 19.1 7.1 20 6 20C4.9 20 4 19.1 4 18C4 16.9 4.9 16 6 16ZM3 10C4.1 10 5 10.9 5 12C5 13.1 4.1 14 3 14C1.9 14 1 13.1 1 12C1 10.9 1.9 10 3 10ZM6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8C4.9 8 4 7.1 4 6C4 4.9 4.9 4 6 4ZM18 16C19.1 16 20 16.9 20 18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16ZM21 10C22.1 10 23 10.9 23 12C23 13.1 22.1 14 21 14C19.9 14 19 13.1 19 12C19 10.9 19.9 10 21 10ZM18 4C19.1 4 20 4.9 20 6C20 7.1 19.1 8 18 8C16.9 8 16 7.1 16 6C16 4.9 16.9 4 18 4Z" />
    </Svg>
  );
};
