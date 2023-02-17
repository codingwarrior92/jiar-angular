import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectConst } from '@viacheslav/project/config/const';
import { ProjectQuery } from '@viacheslav/project/state/project/project.query';
import { JProject } from '@viacheslav/interface/project';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { JIssue } from '@viacheslav/interface/issue';
import { ProjectService } from '@viacheslav/project/state/project/project.service';
import { DeleteIssueModel } from '@viacheslav/interface/ui-model/delete-issue-model';

@Component({
  selector: 'full-issue-detail',
  templateUrl: './full-issue-detail.component.html',
  styleUrls: ['./full-issue-detail.component.scss']
})
@UntilDestroy()
export class FullIssueDetailComponent implements OnInit {
  project: JProject;
  issueById$: Observable<JIssue>;
  issueId: string;
  get breadcrumbs(): string[] {
    return [ProjectConst.Projects, this.project?.name, 'Issues', this.issueId];
  }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _projectQuery: ProjectQuery,
    private _projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.getIssue();
    this._projectQuery.all$.pipe(untilDestroyed(this)).subscribe((project) => {
      this.project = project;
    });
  }

  deleteIssue({issueId, deleteModalRef}: DeleteIssueModel) {
    this._projectService.deleteIssue(issueId);
    deleteModalRef.close();
    this.backHome();
  }

  private getIssue() {
    this.issueId = this._route.snapshot.paramMap.get(ProjectConst.IssueId);
    if (!this.issueId) {
      this.backHome();
      return;
    }
    this.issueById$ = this._projectQuery.issueById$(this.issueId);
  }

  private backHome() {
    this._router.navigate(['/']);
  }
}
