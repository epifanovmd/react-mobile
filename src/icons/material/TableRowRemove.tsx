import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableRowRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.41 13L12 15.59L14.59 13L16 14.41L13.41 17L16 19.59L14.59 21L12 18.41L9.41 21L8 19.59L10.59 17L8 14.41L9.41 13ZM22 9C22 9.53043 21.7893 10.0391 21.4142 10.4142C21.0391 10.7893 20.5304 11 20 11H4C3.46957 11 2.96086 10.7893 2.58579 10.4142C2.21071 10.0391 2 9.53043 2 9V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V9ZM4 9H8V6H4V9ZM10 9H14V6H10V9ZM16 9H20V6H16V9Z" />
    </Svg>
  );
};
