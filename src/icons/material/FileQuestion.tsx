import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileQuestionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 2C4.89 2 4 2.89 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2H6ZM13 3.5L18.5 9H13V3.5ZM12 11C12.7956 11 13.5587 11.3161 14.1213 11.8787C14.6839 12.4413 15 13.2044 15 14C15 15.88 12.75 16.06 12.75 17.75H11.25C11.25 15.31 13.5 15.5 13.5 14C13.5 13.6022 13.342 13.2206 13.0607 12.9393C12.7794 12.658 12.3978 12.5 12 12.5C11.6022 12.5 11.2206 12.658 10.9393 12.9393C10.658 13.2206 10.5 13.6022 10.5 14H9C9 13.2044 9.31607 12.4413 9.87868 11.8787C10.4413 11.3161 11.2044 11 12 11ZM11.25 18.5H12.75V20H11.25V18.5Z" />
    </Svg>
  );
};
