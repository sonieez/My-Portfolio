import movieApp from './images/movie-app.png'
import weatherApp from './images/weather-app.png'
import expenseApp from './images/expense-app.png'
import todoApp from './images/todo-app.png'
export const projects = [
  {name: 'Movie List App', image: movieApp, 
    about: 'A modern application that lets users discover popular movies, search for titles, and save their favorite movies in a  list.', 
    live: 'https://movie-list-app-gamma.vercel.app/',
    code: 'https://github.com/sonieez/Movie-List-App',
    tools: ['React', 'Vite', 'TMDB API']
  },
  {name: 'Weather App', image: weatherApp, 
    about: 'A modern and responsive weather application that allows users to search for any city and view real-time weather information.', 
    live: 'https://weather-app-eight-theta-23.vercel.app/',
    code: 'https://github.com/sonieez/Weather-App-React',
    tools: ['React', 'Vite', 'OpenWeather API']
  },
  {name: 'Expense Tracker App', image: expenseApp, 
    about: 'A modern application that helps users manage their finances by adding, categorizing and filtering transactions.', 
    live: 'https://expense-tracker-app-rho-lemon-35.vercel.app/',
    code: 'https://github.com/sonieez/Expense-Tracker-App',
    tools: ['React', 'Vite', 'CSS']
  },
  {name: 'To-Do App', image: todoApp, 
    about: 'A simple modern and responsive application where you can add, edit, mark done and delete tasks easily and efficiently.', 
    live: 'https://to-do-app-soniez.vercel.app/',
    code: 'https://github.com/sonieez/To-Do-React',
    tools: ['React', 'Vite', 'CSS']
  }
]