const express = require("express");

const ctrl = require("../../controllers/contacts");
const schemas = require("../../schemas/contacts");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.newSchema), ctrl.createContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", validateBody(schemas.newSchema), ctrl.updateContact);

module.exports = router;
