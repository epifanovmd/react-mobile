import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EarthBoxOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 4.27L21 6.27V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H6.27L4.27 23L3 21.72L21.72 3L23 4.27ZM5 3H19.18L17.18 5H15.78C15.67 6 14.83 6.79 13.8 6.79H11.8V8.79C11.8 9.35 11.35 9.79 10.8 9.79H8.8V11.79H10.38L8.55 13.62L5 10.29V17.18L3 19.18V5C3 3.89 3.89 3 5 3ZM11.8 19V17.79C11.17 17.79 10.6 17.5 10.23 17.04L8.27 19H11.8ZM15.8 12.79V15.79H16.8C17.69 15.79 18.74 16.38 19 17.18V8.27L15.33 11.94C15.61 12.12 15.8 12.43 15.8 12.79Z" />
    </Svg>
  );
};
