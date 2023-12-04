import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContentSaveAllIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 7V3H7V7H17ZM14 17C14.7956 17 15.5587 16.6839 16.1213 16.1213C16.6839 15.5587 17 14.7956 17 14C17 13.2044 16.6839 12.4413 16.1213 11.8787C15.5587 11.3161 14.7956 11 14 11C13.2044 11 12.4413 11.3161 11.8787 11.8787C11.3161 12.4413 11 13.2044 11 14C11 14.7956 11.3161 15.5587 11.8787 16.1213C12.4413 16.6839 13.2044 17 14 17ZM19 1L23 5V17C23 17.5304 22.7893 18.0391 22.4142 18.4142C22.0391 18.7893 21.5304 19 21 19H7C5.89 19 5 18.1 5 17V3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H19ZM1 7H3V21H17V23H3C2.46957 23 1.96086 22.7893 1.58579 22.4142C1.21071 22.0391 1 21.5304 1 21V7Z" />
    </Svg>
  );
};
