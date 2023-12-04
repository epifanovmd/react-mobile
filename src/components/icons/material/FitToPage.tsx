import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FitToPageIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 2H4C2.89 2 2 2.89 2 4V20C2 21.11 2.89 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.89 21.11 2 20 2ZM12 4L15 7H13V9H11V7H9L12 4ZM7 15L4 12L7 9V11H9V13H7V15ZM12 20L9 17H11V15H13V17H15L12 20ZM17 15V13H15V11H17V9L20 12" />
    </Svg>
  );
};
