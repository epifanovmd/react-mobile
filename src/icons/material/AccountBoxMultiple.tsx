import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountBoxMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 6H2V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18V20H4V6ZM20 2C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H8C7.46957 18 6.96086 17.7893 6.58579 17.4142C6.21071 17.0391 6 16.5304 6 16V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H20ZM17 7C17 6.20435 16.6839 5.44129 16.1213 4.87868C15.5587 4.31607 14.7956 4 14 4C13.2044 4 12.4413 4.31607 11.8787 4.87868C11.3161 5.44129 11 6.20435 11 7C11 7.79565 11.3161 8.55871 11.8787 9.12132C12.4413 9.68393 13.2044 10 14 10C14.7956 10 15.5587 9.68393 16.1213 9.12132C16.6839 8.55871 17 7.79565 17 7ZM8 15V16H20V15C20 13 16 11.9 14 11.9C12 11.9 8 13 8 15Z" />
    </Svg>
  );
};
