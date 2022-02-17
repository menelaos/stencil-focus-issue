import { newSpecPage } from '@stencil/core/testing';
import { InputWithFocus } from '../input-with-focus';

describe('input-with-focus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputWithFocus],
      html: `<input-with-focus></input-with-focus>`,
    });
    expect(page.root).toEqualHtml(`
      <input-with-focus>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-with-focus>
    `);
  });
});
