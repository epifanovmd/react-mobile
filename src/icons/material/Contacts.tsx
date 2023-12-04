import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContactsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 0H4V2H20V0ZM4 24H20V22H4V24ZM20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4ZM12 6.75C12.5967 6.75 13.169 6.98705 13.591 7.40901C14.0129 7.83097 14.25 8.40326 14.25 9C14.25 9.59674 14.0129 10.169 13.591 10.591C13.169 11.0129 12.5967 11.25 12 11.25C11.4033 11.25 10.831 11.0129 10.409 10.591C9.98705 10.169 9.75 9.59674 9.75 9C9.75 8.40326 9.98705 7.83097 10.409 7.40901C10.831 6.98705 11.4033 6.75 12 6.75ZM17 17H7V15.5C7 13.83 10.33 13 12 13C13.67 13 17 13.83 17 15.5V17Z" />
    </Svg>
  );
};
