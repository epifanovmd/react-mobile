import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FileCabinetIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 8H10V6H14V8ZM20 4V20C20 21.11 19.11 22 18 22H6C4.89 22 4 21.11 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H18C19.11 2 20 2.9 20 4ZM18 13H6V20H18V13ZM18 4H6V11H18V4ZM14 15H10V17H14V15Z" />
    </Svg>
  );
};
