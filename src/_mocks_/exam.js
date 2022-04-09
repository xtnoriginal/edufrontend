import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const exam = [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    title: sample(['paper 1', 'paper 3']),
    score: faker.datatype.number([0,100] ),
    status: sample(['active', 'banned']),
    role: sample([
        '',
        'Hr Manager',
        'UI Designer',
        'UX Designer',
        'UI/UX Designer',
        'Project Manager',
        'Backend Developer',
        'Full Stack Designer',
        'Front End Developer',
        'Full Stack Developer'
    ])
}));

export default users;
