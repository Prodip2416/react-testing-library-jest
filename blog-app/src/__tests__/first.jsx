import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"


// test("first test check",()=>{

//   render(<App/>);
//   const firstText = screen.getByText(
//     "Learning Unit testing by react testing library Jest"
//   );
//   const secondText = screen.getByText(/jest.js/i);
//   const firstTitle = screen.getByTitle(/Hello jesT/i);

//   expect(firstText).toBeInTheDocument();
//   expect(secondText).toBeInTheDocument();
//   expect(firstTitle).toBeInTheDocument();
// });

// test("input checking:",()=>{

//   render(<App/>);
//   const inputCheck = screen.getByRole("textbox");
//   const inputPlaceholderText = screen.getByPlaceholderText("Enter UserName ....");

//   expect(inputCheck).toBeInTheDocument();
//   expect(inputCheck).toHaveAttribute("name","username");
//   expect(inputCheck).toHaveAttribute("type","text");
//   expect(inputPlaceholderText).toBeInTheDocument();
// });

// test('onchange render',()=>{
//   render(<App/>);
//   let input = screen.getByRole('textbox');
//   fireEvent.change(input, {target:{value:'a'}});

//   expect(input.value).toBe("a");
// });

// beforeAll(()=>{
//   console.log('before all calling!')
// });
// beforeEach(()=>{
//   console.log('before each calling!')
// });

// afterAll(()=>{
//   console.log('after all calling!')
// });
// afterEach(()=>{
//   console.log('after each calling!')
// });

test('Snapshot for component', () => {
  const { container } = render(<App />); // Destructure the container from the result
  expect(container).toMatchSnapshot();   // Snapshot the container
});

test("Click func test: 01",()=>{
  render(<App/>);
  const btn = screen.getByRole('button');
  fireEvent.click(btn);

  expect(screen.getByText('Update Data')).toBeInTheDocument();
});
test("Click func test: 02",()=>{
  render(<App/>);
  const btn = screen.getByRole('button');
  fireEvent.click(btn);

  expect(screen.getByText('Update Data')).toBeInTheDocument();
});

