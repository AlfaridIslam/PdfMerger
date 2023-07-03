const express = require('express');
const router = express.Router();

// @route    POST api/contacts
// @desc     GET all users contacts
// @access   Private

router.get('/', (req,res) => {
    res.send('Get all contacts');
});

// @route    POST api/contacts
// @desc     Add new contacts
// @access   Private

router.get('/', (req,res) => {
    res.send('Add contacts');
});

// @route    PUT api/contacts/:id
// @desc     Update contacts
// @access   Private

router.put('/:id', (req,res) => {
    res.send('Update contact');
});

// @route    DELETE api/contacts/:id
// @desc     Update contacts
// @access   Private

router.delete('/:id', (req,res) => {
    res.send('delete contact');
});

module.exports = router;