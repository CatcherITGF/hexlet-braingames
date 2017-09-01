#!/usr/bin/env node
import buildGame from '..';
import {
  rules,
  makeRandomRange,
  getCorrectAnswer,
  numberOfRounds,
} from '../games/even';

buildGame(rules, makeRandomRange, getCorrectAnswer, numberOfRounds);
