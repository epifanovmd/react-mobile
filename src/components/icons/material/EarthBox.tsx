import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const EarthBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3H5ZM15.78 5H19V17.18C18.74 16.38 17.69 15.79 16.8 15.79H15.8V12.79C15.8 12.5248 15.6946 12.2704 15.5071 12.0829C15.3196 11.8954 15.0652 11.79 14.8 11.79H8.8V9.79H10.8C11.0652 9.79 11.3196 9.68464 11.5071 9.49711C11.6946 9.30957 11.8 9.05522 11.8 8.79V6.79H13.8C14.83 6.79 15.67 6 15.78 5ZM5 10.29L9.8 14.79V15.79C9.8 16.9 10.7 17.79 11.8 17.79V19H5V10.29Z" />
    </Svg>
  );
};
