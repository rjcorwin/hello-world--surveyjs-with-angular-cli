import { Component, OnInit } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';

@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.css']
})
export class SurveyEditorComponent implements OnInit {

  editor: SurveyEditor.SurveyEditor;

  ngOnInit() {
      const editorOptions = {showEmbededSurveyTab: true};
      this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
      this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  saveMySurvey = () => {
      console.log(JSON.stringify(this.editor.text));
  }

}