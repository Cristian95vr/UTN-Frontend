const Fallback = ({error, resetErrorBoundary}) => {
    return (
        <div>
            <h1>Oops! Something went wrong:</h1>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
    
}

export default Fallback;