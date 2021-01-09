import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: "Park Bench",
  category: "landscape",
  description: "lorem ipsum",
  index: 1,
};

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    //baseline render component test
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
  });
  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
//Act: Stimulate click event
describe("Click Event", () => {
  it("calls onClose handler", () => {
    const { getByText } = render(
      <Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
 />);
    fireEvent.click(getByText('Close this modal'));
        //Assert: Expected matcher
     expect(mockToggleModal).toHaveBeenCalledTimes(1)
  });
});
