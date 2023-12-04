import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileImageMinusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 19L12 14L13.88 15.88C13.33 16.79 13 17.86 13 19H7ZM10 10.5C10 9.67 9.33 9 8.5 9C7.67 9 7 9.67 7 10.5C7 11.33 7.67 12 8.5 12C9.33 12 10 11.33 10 10.5ZM13.09 20H6V4H13V9H18V13.09C18.33 13.04 18.66 13 19 13C19.34 13 19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H13.81C13.46 21.39 13.21 20.72 13.09 20ZM15 18V20H23V18H15Z" />
    </Svg>
  );
};
