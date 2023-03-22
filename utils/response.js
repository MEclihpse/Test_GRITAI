const successCode = 200;
const failedCode = 400;
const notFoundCode = 404;
const unauthorizedCode = 401;

const success = (res, response) => {
  res.status(successCode).send({
    status: "success",
    code: successCode,
    response,
  });
};

const failed = (res, error) => {
  res.status(failedCode).send({
    status: "failed",
    code: failedCode,
    response: error,
  });
};

const notFound = (res, error) => {
  res.status(notFoundCode).send({
    status: "Not Found",
    code: notFoundCode,
    response: error,
  });
};

const incompleteParams = (res) => {
  res.status(failedCode).send({
    status: "failed",
    code: failedCode,
    response: "incomplete params",
  });
};

const unauthorized = (res) => {
  res.status(unauthorizedCode).send({
    status: "failed",
    code: unauthorizedCode,
    response: "unauthorized",
  });
};

module.exports = {
  success,
  failed,
  notFound,
  incompleteParams,
  unauthorized,
};
