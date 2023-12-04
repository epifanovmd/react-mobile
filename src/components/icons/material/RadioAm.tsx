import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RadioAmIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 7C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V17H5V13H7V17H9V9C9 8.46957 8.78929 7.96086 8.41421 7.58579C8.03914 7.21071 7.53043 7 7 7H5ZM5 9H7V11H5V9ZM13 7C12.4696 7 11.9609 7.21071 11.5858 7.58579C11.2107 7.96086 11 8.46957 11 9V17H13V9H15V16H17V9H19V17H21V9C21 8.46957 20.7893 7.96086 20.4142 7.58579C20.0391 7.21071 19.5304 7 19 7H13Z" />
    </Svg>
  );
};
