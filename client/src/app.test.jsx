import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import testData from './testData.json';

// Mocking the global fetch function
//in order to have less calls to api, wouldn't need the backend running (server or db)
//if you have backend running, you don't need a mock, but this is best practice and saves money
global.fetch = vi.fn()
fetch.mockReturnValue(
    Promise.resolve({ json: () => Promise.resolve(testData), ok: true })
  );


const user = userEvent.setup();

//similar to useEffect = afterEach= after each test
//afterAll =after all tests
//beforeEach & beforeAll
afterAll(() => {
    //needed to avoid issues
    vi.clearAllMocks()
  });

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
    //best practice to take it out, but provides the html of App, location matters
    screen.debug()

    const inputBox  = screen.getByRole("textbox");
    await user.type(inputBox, "Palo Alto");
    const button = screen.getByRole("button", {name: /Submit/i});
    await user.click(button);
    
    await waitFor( () => {
        const weatherName = screen.getByRole("heading", {name: /Palo Alto/i});
        expect(weatherName).toBeInTheDocument();
        const tempTitle = screen.getByRole("heading", {name: /Temperature/i, level:3});
        expect(tempTitle).toBeInTheDocument();
        const feelTitle = screen.getByRole("heading", {name: /Feels Like/i, level:3});
        expect(feelTitle).toBeInTheDocument();

    })
});

// `whoiwh ${}`