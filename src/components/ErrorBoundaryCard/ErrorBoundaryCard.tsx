import React, { Component, ErrorInfo, ReactNode, Suspense } from "react";
import TitelizedCard from "../TitelizedCard";

export interface ErrorBoundaryCardProps {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string | undefined,
  stack: string | undefined
}

class ErrorBoundaryCard extends Component<ErrorBoundaryCardProps, State> {
  public state: State = {
    hasError: false,
    message: undefined,
    stack: undefined
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message, stack: error.stack };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error (in error boundary card):", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <TitelizedCard border={false} backgroundColor="#ff6666" title="An error has occured" text={this.state.message ?? ""} />;
    }

    return <>
      {this.props.children}
    </>;
  }
}

export default ErrorBoundaryCard;
