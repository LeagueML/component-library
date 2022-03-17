import React, { Component, ErrorInfo, ReactNode, Suspense } from "react";
import LoadingCard from "../LoadingCard";
import TitelizedCard from "../TitelizedCard";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string | undefined,
  stack: string | undefined
}

class RootLayoutCard extends Component<Props, State> {
  public state: State = {
    hasError: false,
    message: undefined,
    stack: undefined
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message, stack: error.stack };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <TitelizedCard backgroundColor="#ff6666" title="An error has occured" text={this.state.message ?? ""} />;
    }

    return (
        <Suspense fallback={<LoadingCard />}>
            {this.props.children}
        </Suspense>
    );
  }
}

export default RootLayoutCard;
