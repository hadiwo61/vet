import { testNoDiagnostics } from '../../../diagnosticHelper';
import { getDocUri } from '../../path';

describe('Should find no error when <script> is not present', () => {
  const childUri = getDocUri('diagnostics/noScriptRegion/ChildComp.vue');
  const parentUri = getDocUri('diagnostics/noScriptRegion/ParentComp.vue');

  it('shows no diagnostics error for component without <script> region', async () => {
    await testNoDiagnostics(childUri);
  });

  it('shows no diagnostics error when importing a component without <script> region ', async () => {
    await testNoDiagnostics(parentUri);
  });
});
