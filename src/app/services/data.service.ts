import { Injectable } from '@angular/core';
import {Question} from '../models/Question'

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Luke',
        hide: true
      },
      {
        text: 'What is your favorite colour?',
        answer: 'My favorite color is green',
        hide: true
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is JavaScript',
        hide: true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }

}
