import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PeanutIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 12.77C15.6568 12.4218 15.453 11.9598 15.4272 11.4716C15.4014 10.9833 15.5554 10.5025 15.86 10.12C16.3894 9.45697 16.7413 8.67015 16.8827 7.83359C17.0241 6.99703 16.9503 6.13825 16.6683 5.33808C16.3862 4.53791 15.9052 3.82267 15.2704 3.2597C14.6357 2.69672 13.8682 2.30451 13.04 2.12C12.6978 2.0484 12.3496 2.00824 12 2C10.674 2 9.40219 2.52678 8.46451 3.46447C7.52682 4.40215 7.00004 5.67392 7.00004 7C7.0049 8.13589 7.39638 9.23628 8.11004 10.12C8.40492 10.4952 8.55591 10.9635 8.53574 11.4403C8.51556 11.9171 8.32556 12.371 8.00004 12.72C7.33129 13.4271 6.86212 14.2989 6.64044 15.2465C6.41875 16.1942 6.45249 17.1837 6.7382 18.114C7.02391 19.0443 7.55136 19.8822 8.26672 20.5421C8.98207 21.2019 9.85971 21.6602 10.81 21.87C11.2007 21.9571 11.5998 22.0007 12 22C13.0655 21.9919 14.1056 21.6745 14.9941 21.0864C15.8826 20.4983 16.5811 19.6648 17.0048 18.6872C17.4284 17.7095 17.559 16.6299 17.3807 15.5795C17.2023 14.529 16.7227 13.553 16 12.77ZM13 5C13.1978 5 13.3912 5.05865 13.5556 5.16853C13.7201 5.27841 13.8482 5.43459 13.9239 5.61732C13.9996 5.80004 14.0194 6.00111 13.9808 6.19509C13.9422 6.38907 13.847 6.56725 13.7071 6.70711C13.5673 6.84696 13.3891 6.9422 13.1951 6.98079C13.0011 7.01937 12.8001 6.99957 12.6174 6.92388C12.4346 6.84819 12.2785 6.72002 12.1686 6.55557C12.0587 6.39112 12 6.19778 12 6C12 5.73478 12.1054 5.48043 12.2929 5.29289C12.4805 5.10536 12.7348 5 13 5ZM11 18C10.8023 18 10.6089 17.9414 10.4445 17.8315C10.28 17.7216 10.1518 17.5654 10.0762 17.3827C10.0005 17.2 9.98067 16.9989 10.0193 16.8049C10.0578 16.6109 10.1531 16.4327 10.2929 16.2929C10.4328 16.153 10.611 16.0578 10.8049 16.0192C10.9989 15.9806 11.2 16.0004 11.3827 16.0761C11.5654 16.1518 11.7216 16.28 11.8315 16.4444C11.9414 16.6089 12 16.8022 12 17C12 17.2652 11.8947 17.5196 11.7071 17.7071C11.5196 17.8946 11.2653 18 11 18ZM12 15C12 14.8022 12.0587 14.6089 12.1686 14.4444C12.2785 14.28 12.4346 14.1518 12.6174 14.0761C12.8001 14.0004 13.0011 13.9806 13.1951 14.0192C13.3891 14.0578 13.5673 14.153 13.7071 14.2929C13.847 14.4327 13.9422 14.6109 13.9808 14.8049C14.0194 14.9989 13.9996 15.2 13.9239 15.3827C13.8482 15.5654 13.7201 15.7216 13.5556 15.8315C13.3912 15.9414 13.1978 16 13 16C12.7348 16 12.4805 15.8946 12.2929 15.7071C12.1054 15.5196 12 15.2652 12 15ZM14 19C13.8023 19 13.6089 18.9414 13.4445 18.8315C13.28 18.7216 13.1518 18.5654 13.0762 18.3827C13.0005 18.2 12.9807 17.9989 13.0193 17.8049C13.0578 17.6109 13.1531 17.4327 13.2929 17.2929C13.4328 17.153 13.611 17.0578 13.8049 17.0192C13.9989 16.9806 14.2 17.0004 14.3827 17.0761C14.5654 17.1518 14.7216 17.28 14.8315 17.4444C14.9414 17.6089 15 17.8022 15 18C15 18.2652 14.8947 18.5196 14.7071 18.7071C14.5196 18.8946 14.2653 19 14 19Z" />
    </Svg>
  );
};
