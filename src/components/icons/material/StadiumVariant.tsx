import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StadiumVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3H7L10 5L7 7V8.33C8.47 8.12 10.18 8 12 8C13.82 8 15.53 8.12 17 8.33V3H19L22 5L19 7V8.71C20.85 9.17 22 9.8 22 10.5C22 11.88 17.5 13 12 13C6.5 13 2 11.88 2 10.5C2 9.8 3.15 9.17 5 8.71V3ZM12 9.5C8.69 9.5 7 9.67 7 10.5C7 11.33 8.69 11.5 12 11.5C15.31 11.5 17 11.33 17 10.5C17 9.67 15.31 9.5 12 9.5ZM12 14.75C15.81 14.75 19.2 14.08 21.4 13.05L20 21H15V19C15 18.4696 14.7893 17.9609 14.4142 17.5858C14.0391 17.2107 13.5304 17 13 17H11C10.4696 17 9.96086 17.2107 9.58579 17.5858C9.21071 17.9609 9 18.4696 9 19V21H4L2.6 13.05C4.8 14.08 8.19 14.75 12 14.75Z" />
    </Svg>
  );
};
