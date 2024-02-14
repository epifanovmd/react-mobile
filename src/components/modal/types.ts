import * as React from 'react';
import {
  Animated,
  EasingFunction,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type TOpen = 'default' | 'top';
export type TClose = 'default' | 'alwaysOpen';
export type TPosition = 'initial' | 'top';
export type TStyle = StyleProp<ViewStyle>;

export interface ITimingProps {
  duration: number;
  easing?: EasingFunction;
  delay?: number;
  isInteraction?: boolean;
}

export interface ISpringProps {
  friction?: number;
  tension?: number;
  speed?: number;
  bounciness?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export interface IConfigProps {
  timing: ITimingProps;
  spring?: ISpringProps;
}

export interface ModalProps {
  /**
   * A React node that will define the content of the modal.
   */
  children?: React.ReactNode;
  /**
   * Define the style of the root modal component.
   */
  rootStyle?: TStyle;

  /**
   * Define the style of the modal (includes handle/header/children/footer).
   */
  modalStyle?: TStyle;

  /**
   * Define the style of the handle on top of the modal.
   */
  handleStyle?: TStyle;

  /**
   * Define the style of the overlay.
   */
  overlayStyle?: TStyle;

  /**
   * Define the style of the children renderer (only the inside part).
   */
  childrenStyle?: TStyle;

  /**
   * A number that will enable the snapping feature and create an intermediate point before opening the modal to full screen.
   */
  snapPoint?: number;

  /**
   * A number to define the modal's total height.
   */
  modalHeight?: number;

  /**
   * A number to define the modal's top offset.
   */
  modalTopOffset?: number;

  /**
   * Using this props will show the modal all the time, and the number represents how expanded the modal has to be.
   */
  alwaysOpen?: number;

  /**
   * Shrink the modal to your content's height.
   * @default false
   */
  adjustToContentHeight?: boolean;

  withoutPortal?: boolean;
  /**
   * Define where the handle on top of the modal should be positioned.
   * @default 'outside'
   */
  handlePosition?: 'outside' | 'inside';

  /**
   * Define keyboard's Android behavior like iOS's one.
   * @default Platform.select({ ios: true, android: false })
   */
  avoidKeyboardLikeIOS?: boolean;

  /**
   * Define the behavior of the keyboard when having inputs inside the modal.
   * @default padding
   */
  keyboardAvoidingBehavior?: 'height' | 'position' | 'padding';

  /**
   * Define an offset to the KeyboardAvoidingView component wrapping the ScrollView.
   * @default 0
   */
  keyboardAvoidingOffset?: number;

  /**
   * Using this prop will enable/disable pan gesture.
   * @default true
   */
  panGestureEnabled?: boolean;

  /**
   * Using this prop will enable/disable pan gesture for children.
   * @default true
   */
  childrenPanGestureEnabled?: boolean;

  /**
   * Define if the `TapGestureHandler` wrapping Modalize's core should be enable or not.
   * @default true
   */
  tapGestureEnabled?: boolean;

  /**
   * Using this prop will enable/disable overlay tap gesture.
   * @default true
   */
  closeOnOverlayTap?: boolean;

  /**
   * Define if `snapPoint` props should close straight when swiping down or come back to initial position.
   * @default true
   */
  closeSnapPointStraightEnabled?: boolean;

  /**
   * Object to change the open animations.
   * @default
   * {
   * timing: { duration: 280 },
   * spring: { speed: 14, bounciness: 5 }
   * }
   */
  openAnimationConfig?: IConfigProps;

  /**
   * Object to change the close animations.
   * @default
   * {
   * timing: { duration: 280 },
   * spring: { speed: 14, bounciness: 5 }
   * }
   */
  closeAnimationConfig?: IConfigProps;

  /**
   * A number that determines the momentum of the scroll required.
   * @default 0.05
   */
  dragToss?: number;

  /**
   * Number of pixels that the user must pass to be able to close the modal.
   * @default 120
   */
  threshold?: number;

  /**
   * Number of pixels the user has to pan down fast to close the modal.
   * @default 2800
   */
  velocity?: number | undefined;

  /**
   * Animated.Value of the modal position between 0 and 1.
   */
  panGestureAnimatedValue?: Animated.Value;

  /**
   * Define if the Animated.Value uses the native thread to execute the animations.
   * @default true
   */
  useNativeDriver?: boolean;

  /**
   * Define if the handle on top of the modal is display or not.
   * @default true
   */
  withHandle?: boolean;

  /**
   * Define if the overlay is display or not.
   * @default true
   */
  withOverlay?: boolean;

  /**
   * Callback function when the `open` method is triggered.
   */
  onOpen?(): void;

  /**
   * Callback function when the modal is opened.
   */
  onOpened?(): void;

  /**
   * Callback function when the `close` method is triggered.
   */
  onClose?(): void;

  /**
   * Callback function when the modal is closed.
   */
  onClosed?(): void;

  /**
   * onBackButtonPress is called when the user taps the hardware back button on
   * Android or the menu button on Apple TV. You can any function you want,
   * but you will have to close the modal by yourself.
   */
  onBackButtonPress?(): boolean;

  /**
   * Callback function which determines if the modal has reached the top
   * i.e. completely opened to modal/screen height, or is at the initial
   * point (snapPoint or alwaysOpened height).
   */
  onPositionChange?: (position: 'top' | 'initial') => void;

  /**
   * Callback used when you press the overlay.
   */
  onOverlayPress?(): void;

  /**
   * Callback used when you press the overlay.
   */
  onLayout?(event: LayoutChangeEvent): void;
}

export interface IModalHostProps {
  children: React.ReactNode;
  style?: ViewStyle;
}
