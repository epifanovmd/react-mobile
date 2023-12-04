import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NoteMinusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 18V20H15V18H23ZM13 19C13 19.7 13.13 20.37 13.35 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H15L21 9V13.35C20.37 13.13 19.7 13 19 13V12H12V5H5V19H13ZM14 10H19.5L14 4.5V10Z" />
    </Svg>
  );
};
