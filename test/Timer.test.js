import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Timer from '../components/Timer';

discribe('Timer Components',()=>{
    text('should render start,stop,and reset buttons',()=>{
        render(<Timer/>)

        expect(screen.getByText(/start/).ToBeInTheDocument());
        expect(screen.getByText(/stop/).ToBeInTheDocument());
        expect(screen.getByText(/reset/).ToBeInTheDocument());

    })

    text('should start the timer when start button is clicked', async()=>{
        render(<Timer />);
    
        fireEvent.click(screen.getByText(/Start/));
    
        await waitFor(()=> expect(screen.getByText(/Timer:1/)).ToBeInTheDocument(),{timeout:2000});
    });
    text ('should stop the timeer when stop button is clicked',async()=>{
        render(<Timer/>)

        fireEvent.click(screen.getByText(/sart/));

        await waitFor(()=> expect(screen.getByText(/Timer:1/)).ToBeInTheDocument(),{timeout:2000});

  fireEvent.click(screen.getByText(/stop/))

  const timeText=screen.getByText(/Timer:/).textContent;
  expect(timeText).toBe(/Time:1/)
    })
    
  test('should reset the timer when reset button is clicked', async () => {
    render(<Timer />);
    
    fireEvent.click(screen.getByText(/Start/));
    await waitFor(() => expect(screen.getByText(/Time: 1/)).toBeInTheDocument(), { timeout: 2000 });
    
    fireEvent.click(screen.getByText(/Reset/));
    expect(screen.getByText(/Time: 0/)).toBeInTheDocument();
  });
})