import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FolderLockOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 6C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C2.89 20 2 19.1 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20ZM19 17V13H18H16H14V11C14 10.7348 14.1054 10.4804 14.2929 10.2929C14.4804 10.1054 14.7348 10 15 10C15.2652 10 15.5196 10.1054 15.7071 10.2929C15.8946 10.4804 16 10.7348 16 11H18C18 10.2044 17.6839 9.44129 17.1213 8.87868C16.5587 8.31607 15.7956 8 15 8C14.2044 8 13.4413 8.31607 12.8787 8.87868C12.3161 9.44129 12 10.2044 12 11V13H11V17H19Z" />
    </Svg>
  );
};
