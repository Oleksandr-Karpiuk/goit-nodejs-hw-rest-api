const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  if (!isValidObjectId(req.params.contactId) || !isValidObjectId(req.params.userId)) {
    next(
      HttpError(
        400,
        `${req.params.contactId || req.params.userId} is not valid id`
      )
    );
  }
  next();
};

module.exports = isValidId;
