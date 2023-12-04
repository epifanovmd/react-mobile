import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StarDavidIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2L9.10005 7H3.30005L6.30005 12L3.30005 17H9.10005L12 22L14.9 17H20.7001L17.7 12L20.7001 7H14.9L12 2ZM12 5L13.2 7H10.8L12 5ZM8.20005 8.5L7.10005 10.5L5.90005 8.5H8.20005ZM10 8.5H14L16 12L14 15.5H10L8.00005 12L10 8.5ZM18 8.5L16.8 10.5L15.7 8.5H18ZM7.10005 13.5L8.20005 15.5H6.00005L7.10005 13.5ZM16.9 13.5L18.1 15.5H15.8L16.9 13.5ZM13.3 17L12 19L10.8 17H13.3Z" />
    </Svg>
  );
};
