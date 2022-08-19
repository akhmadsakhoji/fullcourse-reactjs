import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';

function App() {
  const linkRef = useRef(null);
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={()=> goto(linkRef.current)}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, commodi laudantium! Odit quia aliquid distinctio minima nostrum fuga veritatis, numquam maiores. Beatae similique hic laboriosam accusamus architecto. Accusantium ab quod minus commodi consequuntur perspiciatis dicta ipsum. Vitae excepturi non corrupti nostrum harum nisi aliquid quidem esse odit quaerat eos consectetur, impedit, maiores ipsam aliquam eum. Commodi voluptates recusandae facere eveniet culpa! Similique incidunt praesentium libero aut. Officiis qui autem maiores porro odio exercitationem esse ut ducimus incidunt! Quam laudantium molestiae eos. Repudiandae, reprehenderit odio quis quo dolores, saepe maxime, consequatur delectus dignissimos animi est unde. Sunt perspiciatis dolor suscipit at exercitationem consectetur veritatis ipsum nam! Sit consequuntur voluptatibus architecto tempora adipisci ipsam saepe soluta repellendus, perferendis iusto unde animi, odio harum temporibus pariatur voluptatem explicabo quae sapiente provident accusamus hic veritatis voluptates. Obcaecati praesentium quaerat ratione omnis tempore numquam eveniet ex, alias doloremque ab dolor vitae atque provident velit fugiat delectus sint officia repudiandae debitis suscipit. Natus doloribus praesentium autem, at temporibus ducimus dolor ipsam debitis illum unde, quae vel eaque. Beatae magni facilis autem illo impedit quia nam inventore in. Iusto nisi asperiores quae, odit hic corrupti velit ipsum dolore quam. Alias vero laudantium totam quasi natus numquam. At.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, commodi laudantium! Odit quia aliquid distinctio minima nostrum fuga veritatis, numquam maiores. Beatae similique hic laboriosam accusamus architecto. Accusantium ab quod minus commodi consequuntur perspiciatis dicta ipsum. Vitae excepturi non corrupti nostrum harum nisi aliquid quidem esse odit quaerat eos consectetur, impedit, maiores ipsam aliquam eum. Commodi voluptates recusandae facere eveniet culpa! Similique incidunt praesentium libero aut. Officiis qui autem maiores porro odio exercitationem esse ut ducimus incidunt! Quam laudantium molestiae eos. Repudiandae, reprehenderit odio quis quo dolores, saepe maxime, consequatur delectus dignissimos animi est unde. Sunt perspiciatis dolor suscipit at exercitationem consectetur veritatis ipsum nam! Sit consequuntur voluptatibus architecto tempora adipisci ipsam saepe soluta repellendus, perferendis iusto unde animi, odio harum temporibus pariatur voluptatem explicabo quae sapiente provident accusamus hic veritatis voluptates. Obcaecati praesentium quaerat ratione omnis tempore numquam eveniet ex, alias doloremque ab dolor vitae atque provident velit fugiat delectus sint officia repudiandae debitis suscipit. Natus doloribus praesentium autem, at temporibus ducimus dolor ipsam debitis illum unde, quae vel eaque. Beatae magni facilis autem illo impedit quia nam inventore in. Iusto nisi asperiores quae, odit hic corrupti velit ipsum dolore quam. Alias vero laudantium totam quasi natus numquam. At.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          ref={linkRef}
        >
          Learn React
        </a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, commodi laudantium! Odit quia aliquid distinctio minima nostrum fuga veritatis, numquam maiores. Beatae similique hic laboriosam accusamus architecto. Accusantium ab quod minus commodi consequuntur perspiciatis dicta ipsum. Vitae excepturi non corrupti nostrum harum nisi aliquid quidem esse odit quaerat eos consectetur, impedit, maiores ipsam aliquam eum. Commodi voluptates recusandae facere eveniet culpa! Similique incidunt praesentium libero aut. Officiis qui autem maiores porro odio exercitationem esse ut ducimus incidunt! Quam laudantium molestiae eos. Repudiandae, reprehenderit odio quis quo dolores, saepe maxime, consequatur delectus dignissimos animi est unde. Sunt perspiciatis dolor suscipit at exercitationem consectetur veritatis ipsum nam! Sit consequuntur voluptatibus architecto tempora adipisci ipsam saepe soluta repellendus, perferendis iusto unde animi, odio harum temporibus pariatur voluptatem explicabo quae sapiente provident accusamus hic veritatis voluptates. Obcaecati praesentium quaerat ratione omnis tempore numquam eveniet ex, alias doloremque ab dolor vitae atque provident velit fugiat delectus sint officia repudiandae debitis suscipit. Natus doloribus praesentium autem, at temporibus ducimus dolor ipsam debitis illum unde, quae vel eaque. Beatae magni facilis autem illo impedit quia nam inventore in. Iusto nisi asperiores quae, odit hic corrupti velit ipsum dolore quam. Alias vero laudantium totam quasi natus numquam. At.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, commodi laudantium! Odit quia aliquid distinctio minima nostrum fuga veritatis, numquam maiores. Beatae similique hic laboriosam accusamus architecto. Accusantium ab quod minus commodi consequuntur perspiciatis dicta ipsum. Vitae excepturi non corrupti nostrum harum nisi aliquid quidem esse odit quaerat eos consectetur, impedit, maiores ipsam aliquam eum. Commodi voluptates recusandae facere eveniet culpa! Similique incidunt praesentium libero aut. Officiis qui autem maiores porro odio exercitationem esse ut ducimus incidunt! Quam laudantium molestiae eos. Repudiandae, reprehenderit odio quis quo dolores, saepe maxime, consequatur delectus dignissimos animi est unde. Sunt perspiciatis dolor suscipit at exercitationem consectetur veritatis ipsum nam! Sit consequuntur voluptatibus architecto tempora adipisci ipsam saepe soluta repellendus, perferendis iusto unde animi, odio harum temporibus pariatur voluptatem explicabo quae sapiente provident accusamus hic veritatis voluptates. Obcaecati praesentium quaerat ratione omnis tempore numquam eveniet ex, alias doloremque ab dolor vitae atque provident velit fugiat delectus sint officia repudiandae debitis suscipit. Natus doloribus praesentium autem, at temporibus ducimus dolor ipsam debitis illum unde, quae vel eaque. Beatae magni facilis autem illo impedit quia nam inventore in. Iusto nisi asperiores quae, odit hic corrupti velit ipsum dolore quam. Alias vero laudantium totam quasi natus numquam. At.</p>
        
      </header>
    </div>
  );
}

export default App;
