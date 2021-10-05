import React, {
  Component,
  ReactNode,
  PropsWithChildren,
  ReactElement,
} from "react";

type FallbackRender = (props: { error: Error | null }) => ReactElement;

// 捕获错误边界，必须要用 class组件，
class ErrorBoundary extends Component<
  PropsWithChildren<{ fallbackRender: FallbackRender }>,
  any
> {
  state = {
    error: null,
  };

  // 当子组件抛出异常，就修改 state
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fallbackRender } = this.props;

    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}

export default ErrorBoundary;

// <ErrorBoundary></ErrorBoundary>
