const express = require("express");
const userModel = require("../models/usersModel");

exports.showAll = (req, res, next) => {
  userModel.find({}).then((userData) => {
    res.status(200).json({
      status: "success",
      data: userData,
    });
  });
};

exports.findById = (req, res, next) => {
  userModel.findById({ _id: req.params.id }).then((userData) => {
    res.status(200).json({
      status: "user berhasil ditemukan",
      data: userData,
    });
  });
};

exports.add = (req, res, next) => {
  userModel.create(req.body, (userData) => {
    res.status(200).json({
      status: "user berhasil ditambah",
      data: userData,
    });
  });
};

exports.deleteById = (req, res, next) => {
  userModel.findByIdAndDelete({ _id: req.params.id }, (userData) => {
    res.status(200).json({
      status: "user has been deleted",
      data: userData,
    });
  });
};

exports.updateById = (req, res, next) => {
  userModel.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    (err, userData) => {
      res.status(200).json({
        status: "user has been updated",
        data: userData,
      });
    }
  );
};
