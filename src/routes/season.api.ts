import express from 'express';
import { Season, ISeason } from '../models/season.model';
import auth from '../middleware/auth';
import errorHandler from './error';

const router = express.Router();

/* account signup endpoint */
router.post('/newSeason', async (req, res) => {
  const { year } = req.body;
  const { coach } = req.body;
  const { record } = req.body;
  const { teamAward } = req.body;
  const { coachesAward } = req.body;
  const { roster } = req.body;

  if (await Season.findOne({ year })) {
    return errorHandler(res, 'Season already exists.');
  }

  const newSeason = new Season({
    year,
    coach,
    record,
    teamAward,
    coachesAward,
    roster,
    notes: 'Good season boys!',
  });

  return newSeason
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => errorHandler(res, e.message));
});

router.get('/allSeasons', (_, res) => {
  Season.find({})
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((e) => errorHandler(res, e));
});

router.get('/getSeason', (req, res) => {
  const { year } = req.body;

  Season.find({ year: year })
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json({ success: true, result });
      } else {
        errorHandler(res.status(404), 'Season not found');
      }
    })
    .catch((e) => errorHandler(res, e));
});

export default router;
