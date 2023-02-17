import { IssueType } from './issue';
import { IssueUtil } from '@viacheslav/project/utils/issue';

export class IssueTypeWithIcon {
  value: string;
  icon: string;

  constructor(issueType: IssueType) {
    this.value = issueType;
    this.icon = IssueUtil.getIssueTypeIcon(issueType);
  }
}
