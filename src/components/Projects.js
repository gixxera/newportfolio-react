import React from 'react';
import { Card, CardTitle, CardActions, Button } from 'react-mdl';

const Projects = () => (
  <div className="projects-grid">
    <Card className="project" shadow={5} style={{ minWidth: '28%', margin: '20px auto' }}>
      <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://miro.medium.com/max/1200/1*osNaUeA7ZAV5n1zH0X-e1A.jpeg) center / cover' }}></CardTitle>
      <CardActions border>
        <a href="https://github.com/gixxera/node-WeatherApp" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
        <a href="https://weather-app-milen.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>Live link</Button></a>
      </CardActions>
    </Card>

    <Card className="project" shadow={5} style={{ minWidth: '28%', margin: '20px auto' }}>
      <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/6/6e/What-should-I-do-now.jpg) center / cover' }}></CardTitle>
      <CardActions border>
        <a href="https://github.com/gixxera/DecisionHelper-app-react" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
        <a href="#" rel="noopener noreferrer" target="_blank"><Button colored>Live link</Button></a>
      </CardActions>
    </Card>

    <Card className="project" shadow={5} style={{ minWidth: '28%', margin: '20px auto' }}>
      <CardTitle style={{ color: '#fff', height: '200px', background: 'url(http://instantpot.us/wp-content/uploads/2017/07/white-ipad-horizontal-held-by-hands-recipe-page-660x336.png) center / cover' }}></CardTitle>
      <CardActions border>
        <a href="https://github.com/gixxera/recipe-app-react" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
        <a href="https://blissful-babbage-29f1f0.netlify.com" rel="noopener noreferrer" target="_blank"><Button colored>Live link</Button></a>
      </CardActions>
    </Card>

    <Card className="project" shadow={5} style={{ minWidth: '28%', margin: '20px auto' }}>
      <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a0e5ae33705648.56b478e840227.jpg) center / cover' }}></CardTitle>
      <CardActions border>
        <a href="https://github.com/gixxera/chat-app" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
        <a href="https://milen-chat-app.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>live link</Button></a>
      </CardActions>
    </Card>

    <Card className="project" shadow={5} style={{ minWidth: '28%', margin: '20px auto' }}>
      <CardTitle style={{ color: '#fff', height: '200px', background: 'url(http://thebigtodolist.com/wp-content/uploads/2016/01/btdlogo-2.jpg) center / cover' }}></CardTitle>
      <CardActions border>
        <a href="https://github.com/gixxera/todo-list" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
        <a href="https://fervent-heisenberg-86b30d.netlify.com/" rel="noopener noreferrer" target="_blannk"><Button colored>Live Link</Button></a>
      </CardActions>
    </Card>

    <Card className="project" shadow={5} style={{ minWidth: '28%', margin: '20px auto' }}>
      <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://i.ytimg.com/vi/gMFMpC3mC_0/hqdefault.jpg) center / cover' }}></CardTitle>
      <CardActions border>
        <a href="https://github.com/gixxera/pig-game" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
        <a href="https://eloquent-bartik-9f94f4.netlify.com/" rel="noopener noreferrer" target="_blank"><Button colored>live link</Button></a>
      </CardActions>
    </Card>

    <Card className="project" shadow={5} style={{ minWidth: '28%', margin: '20px auto' }}>
      <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://lh3.googleusercontent.com/y3Mp0ZW7r7v8Mo7IutRsqFLMh2Z6C_VAN_npDVIo8eDBA7lNDXCu76ztwNgSEgtMoj1v7AFKX0idGOP-eRC3P7FqLKQgqMtKd7I=s0) center / cover' }}></CardTitle>
      <CardActions border>
        <a href="https://github.com/gixxera/Simple-Tic-Tac-Toe-game" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
        <a href="https://hungry-booth-c3be29.netlify.com/" rel="noopener noreferrer" target="_blank"><Button colored>live link</Button></a>
      </CardActions>
    </Card>

    <Card className="project" shadow={5} style={{ minWidth: '28%', margin: '20px auto' }}>
      <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://store-images.s-microsoft.com/image/apps.23216.9007199266246289.99eca207-26e7-4c4a-b02f-3ea96d21b37b.f89edb6e-7a3c-44a8-9e93-aac220a9051f?mode=scale&q=90&h=400&w=800&background=%23288C67) center / cover' }}></CardTitle>
      <CardActions border>
        <a href="https://github.com/gixxera/hangman" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
        <a href="https://stupefied-mclean-dd5e8f.netlify.com/" rel="noopener noreferrer" target="_blank"><Button colored>live link</Button></a>
      </CardActions>
    </Card>
  </div>
);

export default Projects;