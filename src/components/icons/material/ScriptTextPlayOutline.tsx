import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ScriptTextPlayOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 14H14V15.7C13.9 15.8 13.9 15.9 13.8 16H9V14ZM9 12H14V10H9V12ZM9 8H14V6H9V8ZM7 5C7 4.4 7.4 4 8 4H16V13.8C16.6 13.4 17.3 13.2 18 13.1V5C18 4.4 18.4 4 19 4C19.6 4 20 4.4 20 5V6H22V5C22 3.3 20.7 2 19 2H8C6.3 2 5 3.3 5 5V16H7V5ZM13 19V18.4V18H2V19C2 20.7 3.3 22 5 22H13.8C13.3 21.1 13 20.1 13 19ZM17 16V22L22 19L17 16Z" />
    </Svg>
  );
};
