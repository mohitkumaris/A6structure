import {DashboardTablesModule} from './dashboard-tables.module';

describe('DashboardTablesModule', () => {
  let dashboardTablesModule: DashboardTablesModule;

  beforeEach(() => {
    dashboardTablesModule = new DashboardTablesModule();
  });

  it('should create an instance', () => {
    expect(dashboardTablesModule).toBeTruthy();
  });
});
