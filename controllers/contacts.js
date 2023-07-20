const { Contact } = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find(
    { owner },
    "-createdAt -updatedAt"
  ).populate("owner", "email subscription");
  res.json(result);
};

const getContactById = async (req, res) => {
  const result = await Contact.findById(
    req.params.contactId,
    "-createdAt -updatedAt"
  ).populate("owner", "email subscription");
  if (!result) {
    throw HttpError(404, "Contact with this id not found");
  }
  res.json(result);
};

const createContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const result = await Contact.findByIdAndRemove(req.params.contactId);
  if (!result) {
    throw HttpError(404, "Contact with this id not found");
  }
  res.json({ message: "Delete success" });
};

const updateContact = async (req, res) => {
  const result = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    { new: true, select: "-createdAt -updatedAt" }
  ).populate("owner", "email subscription");
  if (!result) {
    throw HttpError(404, "Contact with this id not found");
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const result = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    { new: true, select: "-createdAt -updatedAt" }
  ).populate("owner", "email subscription");
  if (!result) {
    throw HttpError(404, "Contact with this id not found");
  }
  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};
