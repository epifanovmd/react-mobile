import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectSearchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.31 18.9C19.75 18.21 20 17.38 20 16.5C20 14 18 12 15.5 12C13 12 11 14 11 16.5C11 19 13 21 15.5 21C16.37 21 17.19 20.75 17.88 20.32L21 23.39L22.39 22L19.31 18.9ZM15.5 19C14.12 19 13 17.88 13 16.5C13 15.12 14.12 14 15.5 14C16.88 14 18 15.12 18 16.5C18 17.88 16.88 19 15.5 19ZM21 9H19V7H21V9ZM21 5H19V3H20C20.55 3 21 3.45 21 4V5ZM19 11.03V11H21V13H20.97C20.46 12.21 19.79 11.54 19 11.03ZM17 5H15V3H17V5ZM13 5H11V3H13V5ZM3 7H5V9H3V7ZM7 19H9V21H7V19ZM3 11H5V13H3V11ZM4 3H5V5H3V4C3 3.45 3.45 3 4 3ZM9 5H7V3H9V5ZM3 19H5V21H4C3.45 21 3 20.55 3 20V19ZM3 15H5V17H3V15Z" />
    </Svg>
  );
};
