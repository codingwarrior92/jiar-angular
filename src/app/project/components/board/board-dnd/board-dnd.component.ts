import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IssueStatus } from '@viacheslav/interface/issue';
import { ProjectQuery } from '@viacheslav/project/state/project/project.query';
import { AuthQuery } from '@viacheslav/project/auth/auth.query';
@UntilDestroy()
@Component({
  selector: 'board-dnd',
  templateUrl: './board-dnd.component.html',
  styleUrls: ['./board-dnd.component.scss']
})
export class BoardDndComponent {
  issueStatuses: IssueStatus[] = [
    IssueStatus.BACKLOG,
    IssueStatus.SELECTED,
    IssueStatus.IN_PROGRESS,
    IssueStatus.DONE
  ];

  constructor(public projectQuery: ProjectQuery, public authQuery: AuthQuery) {}
}
