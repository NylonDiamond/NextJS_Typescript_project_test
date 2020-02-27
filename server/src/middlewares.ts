const notFound = (req: any, res: any, next: any) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404); // set 404 status before going to error handling middleware.
  next(error); // go on to next middleware with the error
};

// this will handle ALL errors because it's the last middleware and its an ERROR middleware.
// must have 4 parameters in the error handling middleware!
const errorHandler = (error: any, _req: any, res: any, _next: any) => {
  // if 200, must have came from a different middleware
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    // don't show stack unless in dev mode
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack
  });
};

export default {
  notFound,
  errorHandler
};
