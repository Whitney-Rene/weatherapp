import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

test ('Header renders', () => {
    render(<App />);
    //regex i=case insensitive
    // const header = getByText(/Whitney-Rene's Weather App/i)
    const header = screen.getByRole("heading", {level: 2, name: /Whitney-Rene's Weather App/i});
    expect(header).toBeInTheDocument();
});

test ('Input renders', () => {
    render(<App />);
    const inputBox  = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
})

test ('Button renders', () => {
    render(<App />);
    const button = screen.getByRole("button", {name: /Submit/i});
    //is it rendering = inthedocument()
    expect(button).toBeInTheDocument();
})

//user event is async, userevent will wait for something to happen once the event happens
test ('OnClick getWeather', async () => {
    render(<App />);
    screen.debug()
    const inputBox  = screen.getByRole("textbox");
    await user.type(inputBox, "Palo Alto");
    const button = screen.getByRole("button", {name: /Submit/i});
    await user.click(button);
    //**rerender, waitFor**
//     const weatherName = screen.getByRole("heading", {name: /Palo Alto/i});
//     expect(weatherName).toBeInTheDocument();
})

// `whoiwh ${}`