// POINT DOM要素の取得方法
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it("should have h1 tag", () => {
  const { debug, container } = render(<Greet />);
  // テキストで要素を取得
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();
  
  // roleで要素を取得
  const radioEl = screen.getByRole('radio');
  debug(radioEl)
  expect(radioEl).toBeInTheDocument();
  
  const imgEl = screen.getByRole('img')
  debug(imgEl)

  // Alt属性で要素を取得
  const imgElAlt = screen.getByAltText('React Logo')
  debug(imgElAlt)

  // 見出しを取得
  const headingEl = screen.getByRole('heading', { name: 'こんにちは' })
  debug(container);

  // Labelで要素を取得
  const elByLabel = screen.getByLabelText('氏名')
  debug(elByLabel);

  // Placeholderで要素を取得
  const elByPlaceholder = screen.getByPlaceholderText("氏名");
  debug(elByPlaceholder);

  // Selector APIで要素を取得
  const h2El = container.querySelector('h2');
  debug(h2El);

});
