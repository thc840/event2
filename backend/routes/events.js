const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create a new event
router.post('/', async (req, res) => {
  const { name, date, description, location } = req.body;
  try {
    const newEvent = new Event({ name, date, description, location });
    await newEvent.save();
    res.json(newEvent);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    console.log('Fetched events:', events);  // Add this line
    res.json(events);
  } catch (err) {
    console.error('Error fetching events:', err);  // Add this line
    res.status(500).send('Server Error');
  }
});

// Fetch a single event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;


// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    await event.remove();
    res.json({ msg: 'Event removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update an event by ID
router.put('/:id', async (req, res) => {
  const { name, date, description, location } = req.body;

  try {
    let event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    event.name = name;
    event.date = date;
    event.description = description;
    event.location = location;

    await event.save();

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;



