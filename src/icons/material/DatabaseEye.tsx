import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseEyeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 12V9C4 11.2 7.6 13 12 13C16.4 13 20 11.2 20 9V12C20 12.5 19.8 12.9 19.5 13.4C18.7 13.1 17.9 13 17 13C14.5 13 12.1 14.1 10.6 15.9C6.8 15.6 4 14 4 12ZM12 11C16.4 11 20 9.2 20 7C20 4.8 16.4 3 12 3C7.6 3 4 4.8 4 7C4 9.2 7.6 11 12 11ZM9.1 19.7L8.8 19L9.1 18.3C9.2 18.1 9.3 18 9.3 17.8C6.2 17.2 4 15.8 4 14V17C4 18.8 6.4 20.3 9.7 20.8C9.5 20.5 9.3 20.1 9.1 19.7ZM17 18C16.4 18 16 18.4 16 19C16 19.6 16.4 20 17 20C17.6 20 18 19.6 18 19C18 18.4 17.6 18 17 18ZM23 19C22.1 21.3 19.7 23 17 23C14.3 23 11.9 21.3 11 19C11.9 16.7 14.3 15 17 15C19.7 15 22.1 16.7 23 19ZM19.5 19C19.5 17.6 18.4 16.5 17 16.5C15.6 16.5 14.5 17.6 14.5 19C14.5 20.4 15.6 21.5 17 21.5C18.4 21.5 19.5 20.4 19.5 19Z" />
    </Svg>
  );
};
