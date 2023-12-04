import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileCancelOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 2L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14ZM18 20V9H13V4H6V20H18ZM11.5 10C14 10 16 12 16 14.5C16 17 14 19 11.5 19C9 19 7 17 7 14.5C7 12 9 10 11.5 10ZM11.5 11.5C10.94 11.5 10.42 11.65 10 11.92L14.08 16C14.35 15.58 14.5 15.06 14.5 14.5C14.5 13.7044 14.1839 12.9413 13.6213 12.3787C13.0587 11.8161 12.2956 11.5 11.5 11.5ZM8.5 14.5C8.5 15.2956 8.81607 16.0587 9.37868 16.6213C9.94129 17.1839 10.7044 17.5 11.5 17.5C12.06 17.5 12.58 17.35 13 17.08L8.92 13C8.65 13.42 8.5 13.94 8.5 14.5Z" />
    </Svg>
  );
};
