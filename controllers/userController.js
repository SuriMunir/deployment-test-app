const asyncHandler = require('express-async-handler');
const userData = require('../utils/userData');

// @desc get all users
// method: GET
// public
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: userData,
  });
});

// @desc get one user by id
// method: GET
// public
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Get one user route is working',
  });
});

// @desc create one user
// method: POST
// public
const createUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Create a user route is working',
  });
});

// @desc update one user by Id
// method: PUT
// public
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Create a user route is working',
  });
});

// @desc delete one user by Id
// method: DELETE
// public
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Delete a user route is working',
  });
});

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
