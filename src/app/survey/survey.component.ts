import { Component, OnInit, Input } from '@angular/core';
import * as Survey from 'survey-angular';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  @Input() json: any;

  ngOnInit() {
      const surveyModel = new Survey.ReactSurveyModel(this.json);
      Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }

}
