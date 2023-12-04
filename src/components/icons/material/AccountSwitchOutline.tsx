import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AccountSwitchOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 9C22 9 22 13 22 13V15H16V13C16 13 16 11.31 14.85 9.8C14.68 9.57 14.47 9.35 14.25 9.14C14.77 9.06 15.34 9 16 9ZM8 11C11.5 11 11.94 12.56 12 13H4C4.06 12.56 4.5 11 8 11ZM8 9C2 9 2 13 2 13V15H14V13C14 13 14 9 8 9ZM9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17ZM8 3C8.55 3 9 3.45 9 4C9 4.55 8.55 5 8 5C7.45 5 7 4.55 7 4C7 3.45 7.45 3 8 3ZM8 1C6.34 1 5 2.34 5 4C5 5.66 6.34 7 8 7C9.66 7 11 5.66 11 4C11 2.34 9.66 1 8 1ZM16 1C14.34 1 13 2.34 13 4C13 5.66 14.34 7 16 7C17.66 7 19 5.66 19 4C19 2.34 17.66 1 16 1Z" />
    </Svg>
  );
};
