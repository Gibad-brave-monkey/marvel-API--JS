import Comics from '../Comics/Comics'

  import './app.css';
class App {
  async render() {
    await Comics.render();
  }
}

export default new App();