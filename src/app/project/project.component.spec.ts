import { ProjectComponent } from '@viacheslav/project/project.component';


describe('ProjectComponent', () => {
  let component: ProjectComponent;

  const projectService: any = {};
  const authService: any = {};

  beforeEach(() => {
    component = new ProjectComponent(
      projectService,
      authService
    );
  });

  it('should be able to toggle', () => {
    component.expanded = false;
    component.manualToggle();
    expect(component.expanded).toBe(true);
  });
});
