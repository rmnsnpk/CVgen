import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-form-cv',
  templateUrl: './projects-form-cv.component.html',
  styleUrls: ['./projects-form-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsFormCvComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
