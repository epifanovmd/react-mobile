import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScriptTextKeyOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17.8 19C17.4 17.8 16.3 17 15 17C13.3 17 12 18.3 12 20C12 21.7 13.3 23 15 23C16.3 23 17.4 22.2 17.8 21H19V23H21V21H23V19H17.8ZM15 21.3C14.3 21.3 13.7 20.7 13.7 20C13.7 19.3 14.3 18.7 15 18.7C15.7 18.7 16.3 19.3 16.3 20C16.3 20.7 15.7 21.3 15 21.3ZM9 10H14V12H9V10ZM9 6H14V8H9V6ZM7 5C7 4.4 7.4 4 8 4H16V15.1C16.7 15.3 17.4 15.6 18 16V5C18 4.4 18.4 4 19 4C19.6 4 20 4.4 20 5V6H22V5C22 3.3 20.7 2 19 2H8C6.3 2 5 3.3 5 5V16H7V5ZM10 20C10 19.3 10.1 18.6 10.4 18H2V19C2 20.7 3.3 22 5 22H10.4C10.1 21.4 10 20.7 10 20ZM9 16H12C12.6 15.6 13.3 15.2 14 15.1V14H9V16Z" />
    </Svg>
  );
};
