import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ContentSaveSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 8V4H5V8H15ZM12 18C12.7956 18 13.5587 17.6839 14.1213 17.1213C14.6839 16.5587 15 15.7956 15 15C15 14.2044 14.6839 13.4413 14.1213 12.8787C13.5587 12.3161 12.7956 12 12 12C11.2044 12 10.4413 12.3161 9.87868 12.8787C9.31607 13.4413 9 14.2044 9 15C9 15.7956 9.31607 16.5587 9.87868 17.1213C10.4413 17.6839 11.2044 18 12 18ZM17 2L21 6V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C3.89 20 3 19.1 3 18V4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H17ZM11 22H13V24H11V22ZM7 22H9V24H7V22ZM15 22H17V24H15V22Z" />
    </Svg>
  );
};
