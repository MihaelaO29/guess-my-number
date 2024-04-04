

export interface IQuiz {
    id: number;
    question: string;
    answers: IAnswer[];
}

export interface IAnswer {
    name: string;
    isCorrect: boolean;
    id: number;
}

const listOfQuiz: IQuiz[] = [
    {
        id: 1,
        question: 'Care este capitala Frantei?',
        answers: [
            {
                name: 'Bucuresti',
                isCorrect: false,
                id: 10,
            },
            {
                name: 'Madrid',
                isCorrect: false,
                id: 11,
            },
            {
                name: 'Paris',
                isCorrect: true,
                id: 12,
            },
            {
                name: 'Lyon',
                isCorrect: false,
                id: 13
            }]
    },

    {
        id: 2,
        question: 'In ce tari am fost in vacanta?',
        answers: [
            {
                name: 'Turcia',
                isCorrect: false,
                id: 20,
            },
            {
                name: 'Spania',
                isCorrect: true,
                id: 21,
            },
            {
                name: 'Franta',
                isCorrect: false,
                id: 22,
            },
            {
                name: 'Germania',
                isCorrect: false,
                id: 23,
            }]
    },

    {
        id: 3,
        question: 'In ce tara este urmatoarea vacanta?',
        answers: [
            {
                name: 'Turcia',
                isCorrect: true,
                id: 30,
            },
            {
                name: 'Italia',
                isCorrect: false,
                id: 31,
            },
            {
                name: 'Germania',
                isCorrect: false,
                id: 32,
            },
            {
                name: 'Ungaria',
                isCorrect: false,
                id: 33,
            }]
    },

    {
        id: 4,
        question: 'In ce oras ne mutam?',
        answers: [
            {
                name: 'Cluj',
                isCorrect: false,
                id: 40,
            },
            {
                name: 'Timisoara',
                isCorrect: false,
                id: 41,
            },
            {
                name: 'Brasov',
                isCorrect: true,
                id: 42,
            },
            {
                name: 'Galati',
                isCorrect: false,
                id: 43,
            }
        ]
    }];

export default listOfQuiz;