function Error({ statusCode }: { statusCode: number }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>{statusCode}</h1>
      <p style={{ fontSize: '1.5rem', color: '#666' }}>
        {statusCode === 404
          ? 'This page could not be found'
          : 'An error occurred'}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;