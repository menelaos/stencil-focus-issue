import { newE2EPage } from '@stencil/core/testing';

describe('input-with-focus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-with-focus></input-with-focus>');

    const element = await page.find('input-with-focus');
    expect(element).toHaveClass('hydrated');
  });
});
