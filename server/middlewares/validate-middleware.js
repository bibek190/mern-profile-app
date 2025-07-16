const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    console.error("Validation error:", err);

    // Handle Zod validation errors
    if (err.issues) {
      // Zod v3+ uses 'issues' instead of 'errors'
      const firstError = err.issues[0];
      return res.status(400).json({
        success: false,
        error: {
          field: firstError.path[0], // Gets the field name
          message: firstError.message, // Gets the error message
          code: firstError.code, // Optional: includes error code
        },
      });
    }

    // Fallback for other errors
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = validate;
