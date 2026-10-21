import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("Caught error in React ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px 24px", maxWidth: "800px", margin: "40px auto", fontFamily: "sans-serif", background: "#FFF5F5", border: "1px solid #FEB2B2", borderRadius: "8px", color: "#C53030" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "12px", color: "#9B2C2C" }}>Something went wrong</h2>
          <p style={{ marginBottom: "16px", color: "#4A5568" }}>An error occurred while rendering the page:</p>
          <pre style={{ background: "#2D3748", color: "#F7FAFC", padding: "16px", borderRadius: "6px", overflowX: "auto", fontSize: "0.875rem", lineHeight: "1.5" }}>
            {this.state.error?.toString()}
            {this.state.errorInfo?.componentStack}
          </pre>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{ marginTop: "16px", background: "#075CC8", color: "#FFF", border: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: "600", cursor: "pointer" }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
