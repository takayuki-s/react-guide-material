import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it('h1が存在するかどうか', () => {
    render(<Greet />);
    const h1El = screen.getByText("こんにちは");
    expect(h1El).toBeInTheDocument();
})

// 失敗テスト
// test('if h1 tag exists', () => {
//     render(<Greet />);
//     const h1El = screen.getByText("こんばんは");
//     expect(h1El).toBeInTheDocument();
// })
