import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BriefcaseEyeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 18C17.6 18 18 18.4 18 19C18 19.6 17.6 20 17 20C16.4 20 16 19.6 16 19C16 18.4 16.4 18 17 18ZM9.1 19.7L8.8 19L9.1 18.3C10.4 15.1 13.5 13 17 13C18.9 13 20.6 13.6 22 14.6V8C22 6.9 21.1 6 20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H9.8C9.5 20.6 9.3 20.2 9.1 19.7ZM10 4H14V6H10V4ZM17 15C14.3 15 11.9 16.7 11 19C11.9 21.3 14.3 23 17 23C19.7 23 22.1 21.3 23 19C22.1 16.7 19.7 15 17 15ZM17 21.5C15.6 21.5 14.5 20.4 14.5 19C14.5 17.6 15.6 16.5 17 16.5C18.4 16.5 19.5 17.6 19.5 19C19.5 20.4 18.4 21.5 17 21.5Z" />
    </Svg>
  );
};
