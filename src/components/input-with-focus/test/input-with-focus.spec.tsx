import { newSpecPage } from '@stencil/core/testing';
import { InputWithFocus } from '../input-with-focus';

describe('input-with-focus', () => {
  it('renders', async () => {
    HTMLInputElement.prototype.focus = jest.fn();

    const page = await newSpecPage({
      components: [InputWithFocus],
      html: `<input-with-focus></input-with-focus>`,
    });
    expect(page.root).toEqualHtml(`
      <input-with-focus>
        <mock:shadow-root>
          <input placeholder="I should be focused"/>
        </mock:shadow-root>
      </input-with-focus>
    `);
  });
});
