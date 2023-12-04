import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TicketIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.58 16.8L12 14.5L8.42 16.8L9.5 12.68L6.21 10L10.46 9.74L12 5.8L13.54 9.74L17.79 10L14.5 12.68L15.58 16.8ZM20 12C20 10.89 20.9 10 22 10V6C22 4.89 21.1 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C3.11 10 4 10.9 4 12C4 12.5304 3.78929 13.0391 3.41421 13.4142C3.03914 13.7893 2.53043 14 2 14V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V14C21.4696 14 20.9609 13.7893 20.5858 13.4142C20.2107 13.0391 20 12.5304 20 12Z" />
    </Svg>
  );
};
