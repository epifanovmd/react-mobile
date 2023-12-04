import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TruckPlusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.7 4.3 20 6 20C7.7 20 9 18.7 9 17H15C15 18.7 16.3 20 18 20C19.7 20 21 18.7 21 17H23V12L20 8ZM6 18.5C5.2 18.5 4.5 17.8 4.5 17C4.5 16.2 5.2 15.5 6 15.5C6.8 15.5 7.5 16.2 7.5 17C7.5 17.8 6.8 18.5 6 18.5ZM15 15H8.2C7.7 14.4 6.9 14 6 14C5.1 14 4.3 14.4 3.8 15H3V6H15V15ZM18 18.5C17.2 18.5 16.5 17.8 16.5 17C16.5 16.2 17.2 15.5 18 15.5C18.8 15.5 19.5 16.2 19.5 17C19.5 17.8 18.8 18.5 18 18.5ZM17 12V9.5H19.5L21.5 12H17ZM8 11H6V9H8V7H10V9H12V11H10V13H8V11Z" />
    </Svg>
  );
};
