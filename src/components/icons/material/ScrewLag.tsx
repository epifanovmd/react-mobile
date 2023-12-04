import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ScrewLagIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 19.3L14 16.6V20L12 22L10 20V19.3ZM14 12.7L10 15.4V17.4L9 18V19L15 15.1V14L14 14.7V12.7ZM7 2V5H17V2H7ZM9 6V9L10 9.7V13.4L9 14V15L15 11.1V10L14 10.7C14 10.7 14 10.3 14 9.7L15 9V6H9Z" />
    </Svg>
  );
};
