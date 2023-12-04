import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZodiacAriesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 2C14.95 2 13.91 2.27 13 2.81C12.64 3 12.3 3.26 12 3.54C11.7 3.26 11.36 3 11 2.81C10.09 2.27 9.05 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14V12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9 4 10 4.39 10.75 5.1C10.84 5.18 10.92 5.27 11 5.36V22H13V5.36C13.08 5.27 13.16 5.18 13.25 5.1C14.85 3.58 17.38 3.64 18.91 5.25C20.43 6.85 20.36 9.38 18.76 10.9C18 11.61 17.03 12 16 12V14C17.5913 14 19.1174 13.3679 20.2426 12.2426C21.3679 11.1174 22 9.5913 22 8C22 6.4087 21.3679 4.88258 20.2426 3.75736C19.1174 2.63214 17.5913 2 16 2Z" />
    </Svg>
  );
};
