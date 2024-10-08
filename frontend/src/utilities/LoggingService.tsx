class LoggingService {
  log(message: string) {
    console.log(message);

    // Optionally, send the message to an external logging service
    // Example with Sentry (you need to set up Sentry in your project)
    // Sentry.captureMessage(message);

    // Example with LogRocket (you need to set up LogRocket in your project)
    // LogRocket.log(message);
  }

  error(error: Error) {
    console.error(error);

    // Optionally, send the error to an external logging service
    // Example with Sentry (you need to set up Sentry in your project)
    // Sentry.captureException(error);

    // Example with LogRocket (you need to set up LogRocket in your project)
    // LogRocket.error(error);
  }
}

export default new LoggingService();

