import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MuffinIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 5C16 5 15 2 12 2C8.99998 2 7.99998 5 7.99998 5C5.99998 5 3.99998 7 3.99998 9C1.29998 9 1.29998 13 3.99998 13H20C22.7 13 22.7 9 20 9C20 7 18 5 16 5ZM4.99998 15L6.99998 22H8.99998L7.99998 15H4.99998ZM9.99998 15L11 22H13L14 15H9.99998ZM16 15L15 22H17L19 15H16Z" />
    </Svg>
  );
};
