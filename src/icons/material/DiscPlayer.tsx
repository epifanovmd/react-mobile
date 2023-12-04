import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiscPlayerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.5 10.37C15.54 10.37 16.38 9.53 16.38 8.5C16.38 7.46 15.54 6.63 14.5 6.63C13.46 6.63 12.63 7.46 12.63 8.5C12.63 8.99595 12.827 9.4716 13.1777 9.82229C13.5284 10.173 14.004 10.37 14.5 10.37ZM14.5 1C16.4891 1 18.3968 1.79018 19.8033 3.1967C21.2098 4.60322 22 6.51088 22 8.5C22 10.67 21.08 12.63 19.6 14H9.4C7.93 12.63 7 10.67 7 8.5C7 4.35 10.36 1 14.5 1ZM6 21V22H4V21H2V15H22V21H20V22H18V21H6ZM4 18V19H13V18H4ZM15 17V19H17V17H15ZM19 17C18.7348 17 18.4804 17.1054 18.2929 17.2929C18.1054 17.4804 18 17.7348 18 18C18 18.2652 18.1054 18.5196 18.2929 18.7071C18.4804 18.8946 18.7348 19 19 19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18C20 17.7348 19.8946 17.4804 19.7071 17.2929C19.5196 17.1054 19.2652 17 19 17Z" />
    </Svg>
  );
};
