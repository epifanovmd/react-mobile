import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloudOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7.73 10L15.73 18H6C4.93913 18 3.92172 17.5786 3.17157 16.8284C2.42143 16.0783 2 15.0609 2 14C2 12.9391 2.42143 11.9217 3.17157 11.1716C3.92172 10.4214 4.93913 10 6 10H7.73ZM3 5.27L5.75 8C2.56 8.15 0 10.77 0 14C0 15.5913 0.632141 17.1174 1.75736 18.2426C2.88258 19.3679 4.4087 20 6 20H17.73L19.73 22L21 20.73L4.27 4L3 5.27ZM19.35 10.03C18.67 6.59 15.64 4 12 4C10.5 4 9.15 4.43 8 5.17L9.45 6.63C10.21 6.23 11.08 6 12 6C13.4587 6 14.8576 6.57946 15.8891 7.61091C16.9205 8.64236 17.5 10.0413 17.5 11.5V12H19C19.7956 12 20.5587 12.3161 21.1213 12.8787C21.6839 13.4413 22 14.2044 22 15C22 16.13 21.36 17.11 20.44 17.62L21.89 19.07C23.16 18.16 24 16.68 24 15C24 12.36 21.95 10.22 19.35 10.03Z" />
    </Svg>
  );
};
