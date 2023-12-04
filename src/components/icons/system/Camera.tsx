import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CameraIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M9.48898 7H6.2002C5.08009 7 4.51962 7 4.0918 7.21799C3.71547 7.40973 3.40973 7.71547 3.21799 8.0918C3 8.51962 3 9.08009 3 10.2002V15.8002C3 16.9203 3 17.4796 3.21799 17.9074C3.40973 18.2837 3.71547 18.5905 4.0918 18.7822C4.5192 19 5.07899 19 6.19691 19H17.8031C18.921 19 19.48 19 19.9074 18.7822C20.2837 18.5905 20.5905 18.2837 20.7822 17.9074C21 17.48 21 16.921 21 15.8031V10.1969C21 9.07899 21 8.5192 20.7822 8.0918C20.5905 7.71547 20.2837 7.40973 19.9074 7.21799C19.4796 7 18.9203 7 17.8002 7H14.5108M9.48898 7H9.55078M9.48898 7C9.50151 7.00001 9.51468 7 9.52857 7L9.55078 7M9.48898 7C9.38286 6.99995 9.32339 6.99941 9.27637 6.99414C8.68878 6.92835 8.28578 6.36908 8.40918 5.79084C8.42066 5.73703 8.44336 5.66894 8.4883 5.53412L8.49023 5.52841C8.54156 5.37443 8.56723 5.29743 8.59558 5.22949C8.88586 4.53389 9.54322 4.06083 10.2949 4.00541C10.3683 4 10.449 4 10.6113 4H13.3886C13.5509 4 13.6322 4 13.7057 4.00541C14.4574 4.06083 15.114 4.53389 15.4043 5.22949C15.4326 5.29743 15.4584 5.37434 15.5098 5.52832C15.556 5.66699 15.5791 5.73636 15.5908 5.79093C15.7142 6.36917 15.3118 6.92835 14.7242 6.99414C14.6772 6.99941 14.6171 6.99995 14.5108 7M9.55078 7H14.449M14.449 7H14.5108M14.449 7L14.4712 7C14.4851 7 14.4983 7.00001 14.5108 7M12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13C15 14.6569 13.6569 16 12 16Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
