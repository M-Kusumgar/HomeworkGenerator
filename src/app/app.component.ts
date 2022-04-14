import { Component } from '@angular/core';
import q1 from 'questionsmodule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latex = q1.latex
  inputs = q1.solution_inputs
  solutions = q1.solutions
}
