import { Component, Input } from '@angular/core';
import { IssueType } from '@viacheslav/interface/issue';
import { IssueUtil } from '@viacheslav/project/utils/issue';
import { IssueTypeWithIcon } from '@viacheslav/interface/issue-type-icon';
import { FormControl } from '@angular/forms';
import { ProjectConst } from '@viacheslav/project/config/const';

@Component({
  selector: 'issue-type-select',
  templateUrl: './issue-type-select.component.html',
  styleUrls: ['./issue-type-select.component.scss']
})
export class IssueTypeSelectComponent {
  @Input() control: FormControl;

  issueTypes: IssueTypeWithIcon[];

  constructor() {
    this.issueTypes = ProjectConst.IssueTypesWithIcon;
  }

  getIssueTypeIcon(issueType: IssueType) {
    return IssueUtil.getIssueTypeIcon(issueType);
  }
}
