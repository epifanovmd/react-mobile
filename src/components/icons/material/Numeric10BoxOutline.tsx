import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Numeric10BoxOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 19H5V5H19V19ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM8 17H10V7H6V9H8V17ZM14 7H16C17.11 7 18 7.9 18 9V15C18 16.11 17.11 17 16 17H14C13.4696 17 12.9609 16.7893 12.5858 16.4142C12.2107 16.0391 12 15.5304 12 15V9C12 8.46957 12.2107 7.96086 12.5858 7.58579C12.9609 7.21071 13.4696 7 14 7ZM14 9V15H16V9H14Z" />
    </Svg>
  );
};
