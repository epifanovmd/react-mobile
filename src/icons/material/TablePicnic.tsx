import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TablePicnicIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 6H20V9H18L18.22 11H23V13H18.44L19 18H16.5L15.94 13H8.06L7.5 18H5L5.56 13H1V11H5.78L6 9H4V6ZM15.5 9H8.5L8.29 11H15.71L15.5 9Z" />
    </Svg>
  );
};
