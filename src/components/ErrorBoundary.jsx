import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info here if needed
    if (this.props.onError) this.props.onError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div style={{ color: 'red', padding: '2rem', textAlign: 'center' }}>Something went wrong loading this section.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
