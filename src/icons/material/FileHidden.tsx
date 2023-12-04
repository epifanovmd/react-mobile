import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileHiddenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 9H14V11H11V7H13V9ZM18.5 9L16.38 6.88L17.63 5.63L20 8V10H18V11H15V9H18.5ZM13 3.5V2H12V4H13V6H11V4H9V2H8V4H6V5H4V4C4 2.89 4.89 2 6 2H14L16.36 4.36L15.11 5.61L13 3.5ZM20 20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H16V20H18V19H20V20ZM18 15H20V18H18V15ZM12 22V20H15V22H12ZM8 22V20H11V22H8ZM6 22C4.89 22 4 21.1 4 20V18H6V20H7V22H6ZM4 14H6V17H4V14ZM4 10H6V13H4V10ZM18 11H20V14H18V11ZM4 6H6V9H4V6Z" />
    </Svg>
  );
};
