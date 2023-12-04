import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Video3dIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 7H9C9.53043 7 10.0391 7.21071 10.4142 7.58579C10.7893 7.96086 11 8.46957 11 9V15C11 15.5304 10.7893 16.0391 10.4142 16.4142C10.0391 16.7893 9.53043 17 9 17H5V15H9V13H6V11H9V9H5V7ZM13 7H16C16.7956 7 17.5587 7.31607 18.1213 7.87868C18.6839 8.44129 19 9.20435 19 10V14C19 14.7956 18.6839 15.5587 18.1213 16.1213C17.5587 16.6839 16.7956 17 16 17H13V7ZM16 15C16.2652 15 16.5196 14.8946 16.7071 14.7071C16.8946 14.5196 17 14.2652 17 14V10C17 9.73478 16.8946 9.48043 16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9H15V15H16Z" />
    </Svg>
  );
};
