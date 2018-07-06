import { KpiModule } from './kpi.module';

describe('KpiModule', () => {
  let kpiModule: KpiModule;

  beforeEach(() => {
    kpiModule = new KpiModule();
  });

  it('should create an instance', () => {
    expect(kpiModule).toBeTruthy();
  });
});
