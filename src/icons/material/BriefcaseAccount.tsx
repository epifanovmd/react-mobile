import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BriefcaseAccountIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 6H16V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6ZM10 4H14V6H10V4ZM12 9C12.663 9 13.2989 9.26339 13.7678 9.73223C14.2366 10.2011 14.5 10.837 14.5 11.5C14.5 12.163 14.2366 12.7989 13.7678 13.2678C13.2989 13.7366 12.663 14 12 14C11.337 14 10.7011 13.7366 10.2322 13.2678C9.76339 12.7989 9.5 12.163 9.5 11.5C9.5 10.837 9.76339 10.2011 10.2322 9.73223C10.7011 9.26339 11.337 9 12 9ZM17 19H7V17.75C7 16.37 9.24 15.25 12 15.25C14.76 15.25 17 16.37 17 17.75V19Z" />
    </Svg>
  );
};
