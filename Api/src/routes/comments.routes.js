const { Router } = require("express");

const {
  getCommentsHandler,
  createCommentHandler,
} = require("../handlers/commentsHandler");

const commentsRoutes = Router();

commentsRoutes.post("/create", createCommentHandler);
commentsRoutes.get("/", getCommentsHandler);

// commentsRoutes.put("/:id", updateComments);

module.exports = commentsRoutes;
