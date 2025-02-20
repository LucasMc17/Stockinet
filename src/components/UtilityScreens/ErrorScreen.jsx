export default function ErrorScreen({ error }) {
  return (
    <div>
      <h1>Sorry, something went wrong...</h1>
      {process.env.NODE_ENV !== "production" && error && (
        <>
          <h2>{error.errorStatus}</h2>
          <p>{error.message}</p>
        </>
      )}
    </div>
  );
}
