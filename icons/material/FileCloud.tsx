import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FileCloudIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 9H18.5L13 3.5V9ZM6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2ZM15.68 15C15.34 13.3 13.82 12 12 12C10.55 12 9.3 12.82 8.68 14C7.17 14.18 6 15.45 6 17C6 17.7956 6.31607 18.5587 6.87868 19.1213C7.44129 19.6839 8.20435 20 9 20H15.5C16.163 20 16.7989 19.7366 17.2678 19.2678C17.7366 18.7989 18 18.163 18 17.5C18 16.18 16.97 15.11 15.68 15Z" />
    </Svg>
  );
};
