var _rollbarConfig = {
    accessToken: "{YOUR ROLLBAR ACCESS TOKEN}",
    captureUncaught: true,
    captureUnhandledRejections: true,
    
    payload: {
      environment: "{YOUR ENVIRONMENT}",
      client: {
        javascript: {
          source_map_enabled: true, // false by default
          
          // -- Add this into your configuration ---
          code_version: "{CODE VERSION}",
          // ---------------------------------------
          
          // Optionally have Rollbar guess which frames the error was 
          // thrown from when the browser does not provide line 
          // and column numbers.
          guess_uncaught_frames: true
        }
      }
    }
  };
