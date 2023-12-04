import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RouterWirelessIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.2 5.9L21 5.1C19.6 3.7 17.8 3 16 3C14.2 3 12.4 3.7 11 5.1L11.8 5.9C13 4.8 14.5 4.2 16 4.2C17.5 4.2 19 4.8 20.2 5.9ZM19.3 6.7C18.4 5.8 17.2 5.3 16 5.3C14.8 5.3 13.6 5.8 12.7 6.7L13.5 7.5C14.2 6.8 15.1 6.5 16 6.5C16.9 6.5 17.8 6.8 18.5 7.5L19.3 6.7ZM19 13H17V9H15V13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15C21 14.4696 20.7893 13.9609 20.4142 13.5858C20.0391 13.2107 19.5304 13 19 13ZM8 18H6V16H8V18ZM11.5 18H9.5V16H11.5V18ZM15 18H13V16H15V18Z" />
    </Svg>
  );
};
