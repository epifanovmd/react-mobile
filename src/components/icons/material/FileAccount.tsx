import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FileAccountIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 9H18.5L13 3.5V9ZM6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2ZM14 20V19C14 17.67 11.33 17 10 17C8.67 17 6 17.67 6 19V20H14ZM10 12C9.46957 12 8.96086 12.2107 8.58579 12.5858C8.21071 12.9609 8 13.4696 8 14C8 14.5304 8.21071 15.0391 8.58579 15.4142C8.96086 15.7893 9.46957 16 10 16C10.5304 16 11.0391 15.7893 11.4142 15.4142C11.7893 15.0391 12 14.5304 12 14C12 13.4696 11.7893 12.9609 11.4142 12.5858C11.0391 12.2107 10.5304 12 10 12Z" />
    </Svg>
  );
};
