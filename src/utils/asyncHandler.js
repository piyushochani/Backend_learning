const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

export default asyncHandler;

// Now you can wrap any async route like:
// app.get("/users", asyncHandler(async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// }));
