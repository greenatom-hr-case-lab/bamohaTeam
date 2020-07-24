import React from 'react';

import TaskCollection from '../task-collection/task-collection.component';
import CommentCollection from '../../components/comment-collection/comment-collection.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { Dropdown } from 'semantic-ui-react';

import './plan.styles.scss';

const employeeOptions = [
    {
      key: 'Jenny',
      text: 'Jenny',
      value: 'Jenny',
      image: { avatar: true, src: '../../assets/users/jenny.jpg' },
    },
    {
      key: 'Stevie',
      text: 'Stevie',
      value: 'Stevie',
      image: { avatar: true, src: '../../assets/users/stevie.jpg' },
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
      image: { avatar: true, src: '../../assets/users/christian.jpg' },
    },
    {
      key: 'Matt',
      text: 'Matt',
      value: 'Matt',
      image: { avatar: true, src: '../../assets/users/matt.jpg' },
    },
  ]

const Plan = (props) => {

    return(
        <div className='plan'>
            <div className='info'>
                <textarea className='title' placeholder='Имя Фамилия Отчество'></textarea>
                <textarea className='position' placeholder='Должность'></textarea>
                <Dropdown
                    className='hr'
                    placeholder='Кадровый сотрудник'
                    fluid
                    selection
                    options={employeeOptions}
                />
                <Dropdown
                    className='boss'
                    placeholder='Руководитель'
                    fluid
                    selection
                    options={employeeOptions}
                />
                <span className='grade'>Оценка</span>
                <span className='result'>Выполнено</span>
                <h2>Комментарии</h2>
                <CommentCollection/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium posuere dolor sed lacinia. Quisque dolor diam, pellentesque in tellus eget, pellentesque aliquam nisi. Pellentesque ornare finibus tortor ut faucibus. Ut ut dolor quis risus dignissim ullamcorper. Duis consequat cursus tortor. Sed dui orci, lacinia non mattis et, eleifend nec est. Suspendisse lacus neque, viverra non urna vitae, efficitur blandit nunc. Integer tristique dolor sit amet risus tempor tempus.

Praesent eu mollis ligula. Ut sagittis, mauris vitae sagittis dignissim, neque diam bibendum nunc, et pulvinar arcu leo ut ipsum. Nam consequat felis in sapien lobortis placerat. Aenean vehicula finibus nunc nec tincidunt. Integer fermentum consectetur urna, sed egestas est malesuada id. Suspendisse quis velit vitae massa pellentesque congue. Sed auctor dui at tortor maximus, non lacinia sem fringilla. Cras orci sapien, ornare at pretium non, dapibus sed augue. Proin quis erat porttitor, semper enim congue, luctus magna. Curabitur odio justo, pretium nec ullamcorper et, blandit quis lectus. In lacinia turpis posuere placerat tristique. Aliquam vulputate nulla mauris, a aliquet ex tempor in. Vestibulum nibh leo, accumsan at iaculis et, interdum vel diam. Sed malesuada sollicitudin tortor, ut ultrices nulla bibendum eget.

Sed erat lectus, ultricies in sagittis a, feugiat et elit. Nulla venenatis dolor nulla, ultrices venenatis ante gravida sed. Aliquam erat volutpat. Cras iaculis eleifend euismod. Sed feugiat ante mi, eget luctus tellus sodales ac. In tincidunt, ex quis sodales ornare, quam justo sodales velit, nec aliquam augue quam at dui. Quisque blandit, orci eu scelerisque mattis, turpis sapien pellentesque leo, nec venenatis nibh nunc non neque. Phasellus quis neque in lorem rhoncus dictum vitae quis mi. Sed ante nulla, consequat id lectus a, gravida viverra nunc. Vivamus posuere imperdiet pulvinar.

Vestibulum sed leo eleifend, aliquet tortor sit amet, bibendum elit. Ut molestie nulla quis pharetra blandit. Curabitur ultricies, leo et mollis egestas, metus elit finibus orci, in ornare nunc erat fringilla mi. Sed quis porta lacus, vel ultrices est. Quisque est purus, facilisis non gravida a, cursus quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus tempor erat, at dignissim purus fringilla non.

Etiam eleifend, orci in luctus dapibus, elit nulla convallis lacus, mattis tempus ligula risus a dolor. Mauris varius ante quis purus aliquam, vitae pretium odio auctor. Donec risus velit, elementum vel ultrices quis, tincidunt non augue. Pellentesque at tortor odio. Curabitur consectetur dapibus arcu quis mattis. Donec consectetur dolor maximus, auctor magna et, mollis est. Vivamus vitae tempus elit, aliquet porttitor augue. Aenean porta placerat sem, in congue elit rhoncus eu. Maecenas metus turpis, vestibulum sagittis lacus at, vulputate mollis enim.</p>
            </div>
            <div className='tasks-and-nav'>
                <div className='nav'>
                    <CustomButton text='Скачать в PDF'/>
                    <CustomButton text='Передвинуть на следующий этап'/>
                </div>
                
                <h2>Задачи</h2>
                <TaskCollection />
            </div>
        </div>
    );
}

export default Plan;