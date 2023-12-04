import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FishIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 20L12.76 17C9.5 16.79 6.59 15.4 5.75 13.58C5.66 14.06 5.53 14.5 5.33 14.83C4.67 16 3.33 16 2 16C3.1 16 3.5 14.43 3.5 12.5C3.5 10.57 3.1 9 2 9C3.33 9 4.67 9 5.33 10.17C5.53 10.5 5.66 10.94 5.75 11.42C6.4 10 8.32 8.85 10.66 8.32L9 5C11 5 13 5 14.33 5.67C15.46 6.23 16.11 7.27 16.69 8.38C19.61 9.08 22 10.66 22 12.5C22 14.38 19.5 16 16.5 16.66C15.67 17.76 14.86 18.78 14.17 19.33C13.33 20 12.67 20 12 20ZM17 11C16.7348 11 16.4804 11.1054 16.2929 11.2929C16.1054 11.4804 16 11.7348 16 12C16 12.2652 16.1054 12.5196 16.2929 12.7071C16.4804 12.8946 16.7348 13 17 13C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" />
    </Svg>
  );
};
