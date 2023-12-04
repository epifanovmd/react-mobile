import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MagnifyRemoveOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.5L20.5 19L15.5 14ZM9.5 14C7 14 5 12 5 9.5C5 7 7 5 9.5 5C12 5 14 7 14 9.5C14 12 12 14 9.5 14ZM10.91 11.62L9.5 10.21L8.09 11.62L7.38 10.91L8.79 9.5L7.38 8.09L8.09 7.38L9.5 8.79L10.91 7.38L11.62 8.09L10.21 9.5L11.62 10.91L10.91 11.62Z" />
    </Svg>
  );
};
