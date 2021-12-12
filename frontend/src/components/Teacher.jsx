import axios from 'axios';
import React from 'react';

async function fetchData () {
  const response = await axios.get('http://127.0.0.1:5000/courses/')
  console.log(response)
}

function Teacher() {
  return (
    <main class="teachers">
      <div onClick={fetchData} class="teachers_Container">
        <div class="teachers_item">
          <img class="teacher_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTn8OO8ODvYLZsVsuGvl9dNswWuulv9bspg&usqp=CAU" alt="" />
          <p class="teacher_name">Иванов Иван Иванович</p>
          <p class="teacher_course">Frontend</p>
          <p class="teacher_disc">Я Работаю на должности такой-то. В компаниии Такой-то  5 лет.Мне очень нравится</p>
        </div>
        <div class="teachers_item">
          <img class="teacher_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTn8OO8ODvYLZsVsuGvl9dNswWuulv9bspg&usqp=CAU" alt="" />
          <p class="teacher_name">Иванов Иван Иванович</p>
          <p class="teacher_course">Frontend</p>
          <p class="teacher_disc">Я Работаю на должности такой-то. В компаниии Такой-то  5 лет.Мне очень нравится</p>
        </div>
        <div class="teachers_item">
          <img class="teacher_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTn8OO8ODvYLZsVsuGvl9dNswWuulv9bspg&usqp=CAU" alt="" />
          <p class="teacher_name">Иванов Иван Иванович</p>
          <p class="teacher_course">Frontend</p>
          <p class="teacher_disc">Я Работаю на должности такой-то. В компаниии Такой-то  5 лет.Мне очень нравится</p>
        </div>
      </div>
      <div class="teachers_Container">
        <div class="teachers_item">
          <img class="teacher_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTn8OO8ODvYLZsVsuGvl9dNswWuulv9bspg&usqp=CAU" alt="" />
          <p class="teacher_name">Иванов Иван Иванович</p>
          <p class="teacher_course">Frontend</p>
          <p class="teacher_disc">Я Работаю на должности такой-то. В компаниии Такой-то  5 лет.Мне очень нравится</p>
        </div>
        <div class="teachers_item">
          <img class="teacher_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTn8OO8ODvYLZsVsuGvl9dNswWuulv9bspg&usqp=CAU" alt="" />
          <p class="teacher_name">Иванов Иван Иванович</p>
          <p class="teacher_course">Frontend</p>
          <p class="teacher_disc">Я Работаю на должности такой-то. В компаниии Такой-то  5 лет.Мне очень нравится</p>
        </div>
      </div>
    </main>
  );
}

export default Teacher;
