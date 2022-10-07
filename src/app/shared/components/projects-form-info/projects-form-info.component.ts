import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-form-info',
  templateUrl: './projects-form-info.component.html',
  styleUrls: ['./projects-form-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsFormInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
